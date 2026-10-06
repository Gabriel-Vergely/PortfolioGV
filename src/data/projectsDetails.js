export const projects = {
    flowos: {
      title: "FlowOS",
      wip: true,
      content: `
**FlowOS** is a web platform for building automations. It embeds the **n8n** workflow engine and combines it with several **AI models** to speed up the creation of automations and help with their compliance.

## What it does
- Visual creation of automations on top of an **embedded n8n** engine.
- Uses different **AI models** to assist and accelerate building workflows.
- Focuses on speeding up both the **creation** and the **compliance** of automations.

## Tech stack
- Embedded n8n, web application, AI models, PostgreSQL.

## Objective
To make building compliant automations faster and easier.

## Phase
In development.
      `,
    },
    threatlog: {
      title: "ThreatLog AI",
      content: `
**ThreatLog AI** is a real-time, AI-powered threat detection platform built as a set of containerized microservices. It continuously ingests server logs, classifies every single event with a trained machine-learning model, and streams the results to a live dashboard that raises an alert the moment an attack is detected.

## See it in action
A short recording of the running platform: sign-in, the real-time anomaly dashboard with its live charts, the weekly breakdown, instant alerts and the table of detected attacks.

<video controls width="840" poster="/projects/threatlog/dashboard-poster.png">
  <source src="/projects/threatlog/demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## The data it learns from
The model is trained and fed with two kinds of **synthetic data**, generated to mimic real infrastructure telemetry:

- **System events (syslog):** host, service, PID and message for services such as sshd, sudo, cron and pure-ftpd, mixing benign activity with malicious patterns.
- **Network flows (NetFlow):** connection records based on the public **CIDDS-001** intrusion-detection dataset, with source/destination IPs and ports, packets, bytes, flags and a labelled attack type.

![Synthetic system and network datasets](/projects/threatlog/synthetic-data.png)

**Attacks embedded in the data:** SSH brute force (bursts of failed passwords from one IP), user enumeration (invalid-user probes), port scanning (sweeping many destination ports) and Denial of Service (packet/byte floods). Everything else, like cron jobs, admin sudo commands or FTP transfers, forms the normal baseline.

## Ingestion
A log generator replays the system and network logs and streams them **line by line** to Apache Kafka (and to AWS S3 for storage), one asynchronous task per client at a configurable interval. Kafka is the backbone of the pipeline: raw events travel on the customer_logs topic, scored events on predicted_logs.

<video controls width="840">
  <source src="/projects/threatlog/ingestion.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Real-time classification
The model service consumes each event, builds its features (ordinal encoding of host/service, standard scaling and 384-dimension sentence embeddings of the message) and runs a trained classifier. It outputs a prediction, **1 = anomaly (attack)** or **0 = normal**, and anomalies are pushed instantly to the dashboard as alerts.

<video controls width="840">
  <source src="/projects/threatlog/classification.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Model training, metrics & versioning
The classifier is trained on ~6,400 labelled log events. I tracked the training with **MLflow** to compare algorithms, log metrics and version the model. The best model (Random Forest) reaches **~0.996 accuracy and F1**, with **0.996 recall on attacks**, and each training run is registered as a new model version.

![MLflow run metrics and model version registry](/projects/threatlog/mlflow.png)

## Architecture
The platform is an event-driven pipeline of independent services:

1. **Log generator** streams per-client system and network logs to Kafka (and AWS S3).
2. **Apache Kafka** carries raw events (customer_logs) and scored events (predicted_logs).
3. **ML model service** consumes each event, predicts a threat score and publishes the result.
4. **FastAPI backend** stores logs, scores and notifications in MariaDB, and exposes a JWT-secured REST API plus a WebSocket feed.
5. **Vue / Quasar frontend** subscribes to the WebSocket and updates charts, the log table and alerts in real time.

## Tech stack
- **Frontend:** Vue 3, Quasar, TypeScript, Pinia, ApexCharts, WebSockets
- **Backend:** Python, FastAPI, SQLAlchemy, MariaDB, JWT authentication
- **Streaming:** Apache Kafka
- **Machine learning:** scikit-learn (RandomForest / DecisionTree), sentence embeddings, MLflow
- **Cloud & infra:** AWS (S3, Lambda), Docker & Docker Compose

## Team & phase
A **DeathLockers** team project focused on the AI detection pipeline and service integration. Working prototype: the full pipeline runs end to end (log generator + Kafka + ML model + API + live dashboard).
      `,
    },
    acrypts: {
      title: "ACRYPTS",
      wip: true,
      content: `
**ACRYPTS** is a cryptography inventory and compliance tool. It discovers the cryptographic assets used across an organisation's code and systems and produces two key artifacts: a cryptographic **CBOM** (Cryptography Bill of Materials) and a **CAL** (Crypto Agility Layer) that makes cryptographic migrations easier.

## What it does
- Inventories cryptographic assets: algorithms, keys, certificates, protocols and where they are used.
- Generates a **CBOM**, a standardized bill of materials for cryptography, for full visibility of the crypto in use.
- Provides a **CAL** (Crypto Agility Layer) that abstracts the cryptography in use so algorithms can be migrated (for example to stronger or post-quantum schemes) with minimal changes.
- Helps assess crypto-agility by flagging weak or deprecated algorithms.

## Objective
To give organisations clear visibility and governance over their cryptography, supporting security audits and compliance.

## Phase
In development.
      `,
    },

  };
