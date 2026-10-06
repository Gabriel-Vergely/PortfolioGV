import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CTFPage() {
  const ctfProjects = [
    // ─── OverTheWire ──────────────────────────────────────────────────────────
    {
      id: "bandit",
      title: "Bandit",
      platform: "OverTheWire",
      year: "2025",
      description:
        "OverTheWire wargame to learn basic Linux and security through progressive challenges, solving exercises to obtain the next level’s password.",
    },
    {
      id: "natas",
      title: "Natas",
      platform: "OverTheWire",
      year: "2025",
      description:
        "OverTheWire wargame to learn web security and vulnerabilities through progressive challenges, solving exercises to obtain the next level’s password.",
    },
    // ─── Digital Forensics ────────────────────────────────────────────────────
    {
      id: "forensics-chain-of-custody",
      title: "Chain of Custody – FTK Imager",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Creating forensic disk images and hash-verified evidence packages with FTK Imager. Covers MD5/SHA1 chain of custody, evidence item export, and file hash list generation.",
    },
    {
      id: "forensics-steganography",
      title: "Steganography – SteghideUI, S-Tools & Analysis",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Three steganography exercises: embedding files in images with SteghideUI and S-Tools, then detecting hidden data using zsteg, exiftool, strings and hexdump to extract a secret from mystery images.",
    },
    {
      id: "forensics-ram-dump",
      title: "RAM Dump & KeePass CVE-2023-32784",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Capturing RAM with FTK Imager, exploiting KeePass CVE-2023-32784 to extract a master password from a process memory dump using a public PoC.",
    },
    {
      id: "forensics-volatility",
      title: "Memory Analysis – Volatility3",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Initial triage of a Windows memory dump with Volatility3: system profile identification, process listing, network connections, and injected code detection.",
    },
    {
      id: "forensics-malware",
      title: "WannaCry Malware Analysis (Volatility3)",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Analyzing a WannaCry ransomware memory dump with Volatility3: identifying malicious processes (@WanaDecryptor, ed01ebfbc9eb5b), Tor-based C2 connections on port 9050, and file artifacts.",
    },
    {
      id: "forensics-antiforensics",
      title: "Antiforensics – Slack Space & DoD Secure Deletion",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Writing data to disk slack space with dd, verifying it with hexdump, securely deleting with shred/dd, and comparing DoD 5220.22-M compliant tools: Eraser, CCleaner, and BleachBit.",
    },
    {
      id: "forensics-autopsy",
      title: "Autopsy – m57 Corporate Espionage Investigation",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Forensic investigation of the m57 case: determining spreadsheet creation date via metadata, uncovering a spoofed email chain, and ruling out insider involvement using Autopsy.",
    },
    {
      id: "forensics-disk-copy",
      title: "Bit-by-Bit Disk Copy & Slack Space Recovery",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Creating a disk with hidden data in slack space using dd, making a bit-by-bit copy, and recovering the hidden message with Autopsy keyword search on a forensic image.",
    },
    {
      id: "forensics-osint",
      title: "OSINT – Target Profiling via Breach Data & Social Networks",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Full OSINT profile from an email address: breach detection with HaveIBeenPwned, hash cracking with Hashcat, educational history via chess tournament records, and employer via LinkedIn.",
    },
    {
      id: "forensics-sysinternals",
      title: "Windows SysInternals – Forensic System Audit",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Using SysInternals tools (autoruns, accesschk, sigcheck, logonsessions, procdump) to audit scheduled tasks, permissions, startup items, unsigned services, and dump the LSASS process.",
    },
    // ─── Ethical Hacking ──────────────────────────────────────────────────────
    {
      id: "ethical-hacking-intro",
      title: "Ethical Hacking Intro – Anonymization & Attack Phases",
      platform: "Bootcamp",
      year: "2025",
      description:
        "TOR Browser setup, proxychains configuration, Tornet IP rotation, DNS leak verification, attack phase methodology, and introduction to Metasploit Framework.",
    },
    {
      id: "ethical-hacking-revshell",
      title: "Reverse Shells with Netcat",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Establishing reverse and bind shells between Windows and Kali using Netcat: Windows→Kali reverse shell, Kali→Windows reverse shell, and bind shell through a Windows Firewall rule.",
    },
    // ─── Privilege Escalation (Windows) ───────────────────────────────────────
    {
      id: "privesc-boot-bypass",
      title: "Windows Privesc – Boot Media Bypass & Hiren’s Boot",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Replacing sethc.exe with cmd.exe via Windows ISO recovery to gain SYSTEM, creating a hidden persistent admin user via registry, and password reset with Hiren’s Boot CD NT Password tool.",
    },
    {
      id: "privesc-service-exploit",
      title: "Windows Privesc – Service Misconfiguration (NSSM)",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Exploiting weak service permissions: compiling a Python reverse shell with PyInstaller, registering it as a Windows service via NSSM, and running a C payload to add an admin user.",
    },
    {
      id: "privesc-powershell",
      title: "Windows Privesc – PowerShell & Powercat",
      platform: "Bootcamp",
      year: "2025",
      description:
        "PowerShell post-exploitation: Base64 command encoding, in-memory vs on-disk script execution via IEX, cross-platform file transfer, and Powercat reverse shell without AV detection.",
    },
    // ─── WiFi ─────────────────────────────────────────────────────────────────
    {
      id: "wifi-wpa2",
      title: "WiFi Hacking – WPA2 Handshake Capture & Cracking",
      platform: "Bootcamp",
      year: "2025",
      description:
        "WPA2 security assessment: monitor mode with airmon-ng, network scanning, deauthentication to capture the 4-way handshake, dictionary attack with aircrack-ng, and GPU cracking with Hashcat.",
    },
    // ─── Phishing ─────────────────────────────────────────────────────────────
    {
      id: "web-phishing-manual",
      title: "Manual Phishing – Amazon Clone with Node.js",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Building a pixel-perfect Amazon login page clone, Node.js Express server to capture and save credentials, crafting a spoofed phishing email, and Puppeteer API for seamless victim redirect.",
    },
    // ─── Machine Learning ─────────────────────────────────────────────────────
    {
      id: "ai-constraint-mip",
      title: "Constraint Solving with MIP – N-Queens & Sudoku",
      platform: "IOC",
      year: "2024",
      description:
        "Modelling N-Queens and Sudoku as integer programs (MIP) and solving them with SCIP/OR-Tools: variables, constraints and board visualisations of the solutions.",
    },
    {
      id: "ai-pathfinding",
      title: "Pathfinding – MaxSAT vs MIP",
      platform: "IOC",
      year: "2024",
      description:
        "Solving maze pathfinding two ways and comparing them: MaxSAT with PySAT (RC2) and MIP with SCIP/OR-Tools, with the shortest path rendered on the grid.",
    },
    {
      id: "ai-bayesian-networks",
      title: "Bayesian Networks – Inference & Conditional Independence",
      platform: "IOC",
      year: "2024",
      description:
        "Building Bayesian networks with pyAgrum and running inference: CPTs, hard and soft evidence, explaining-away, and conditional-independence queries, with the network graphs.",
    },
    {
      id: "gen-bert",
      title: "Text Classification with BERT",
      platform: "IOC",
      year: "2024",
      description:
        "Using a pre-trained BERT model (transformers) to classify text: architecture, tokenization, embeddings and fine-tuning for classification.",
    },
    {
      id: "gen-llama2",
      title: "Running LLaMA 2 Locally",
      platform: "IOC",
      year: "2024",
      description:
        "Running a quantized LLaMA 2 model locally with llama.cpp: loading the GGML model, prompt templates and text generation.",
    },
    {
      id: "gen-stable-diffusion",
      title: "Image Generation with Stable Diffusion",
      platform: "IOC",
      year: "2024",
      description:
        "Text-to-image generation with Stable Diffusion (diffusers): configurable hyperparameters, image-to-image and batch generation.",
    },
    {
      id: "gen-rag",
      title: "RAG over Documents with LangChain",
      platform: "IOC",
      year: "2024",
      description:
        "Retrieval-Augmented Generation over documents with LangChain: loading a PDF, chunking, embeddings, a vector store (FAISS) and querying the LLM, both directly and through the RAG pipeline.s with Chroma).",
    },
    {
      id: "ml-linear-regression",
      title: "Multiple Linear Regression – Student Performance",
      platform: "IOC",
      year: "2024",
      description:
        "Predicting student performance with multiple linear regression: feature scaling, GridSearchCV, Ridge and Lasso regularization, PCA and model evaluation.",
    },
    {
      id: "ml-logistic-regression",
      title: "Logistic Regression – Binary Classification",
      platform: "IOC",
      year: "2024",
      description:
        "Binary classification with logistic regression: train/test split, GridSearchCV tuning, normalization, PCA and confusion-matrix metrics.",
    },
    {
      id: "ml-insurance-regression",
      title: "Insurance Cost Regression – Decision Trees & AdaBoost",
      platform: "IOC",
      year: "2024",
      description:
        "Predicting medical insurance charges with Decision Tree and AdaBoost regressors, hyperparameter tuning and model testing.",
    },
    {
      id: "ml-medical-regression",
      title: "Medical Treatment Cost Regression – SVM, Trees & ANNs",
      platform: "IOC",
      year: "2024",
      description:
        "Estimating patient treatment cost with SVM, Decision Tree, Random Forest, AdaBoost and neural-network regressors, with full model comparison.",
    },
    {
      id: "ml-species-classification",
      title: "Endangered Species Binary Classification",
      platform: "IOC",
      year: "2024",
      description:
        "Classifying whether a species is endangered using SVM, trees, Random Forest, AdaBoost and ANNs, with PCA, outlier handling and model comparison.",
    },
    {
      id: "ml-knn",
      title: "KNN – Penguin Multi-class Classification",
      platform: "IOC",
      year: "2024",
      description:
        "K-Nearest Neighbors classifier on the Palmer Penguins dataset: feature scaling, cross-validated k selection, and multi-class classification of Adelie, Chinstrap, and Gentoo penguins.",
    },
    {
      id: "ml-cnn",
      title: "CNN – Fashion-MNIST Clothing Image Classification",
      platform: "IOC",
      year: "2024",
      description:
        "10-class CNN image classifier on Fashion-MNIST (Keras/TensorFlow): a first run collapsed to predicting a single class (~11% accuracy), then a clean retrain reached 87.8% top-1 with per-class confusion-matrix error analysis.",
    },
    {
      id: "yolo-vision",
      title: "YOLOv8 – Detection, Segmentation, Classification & Pose",
      platform: "IOC",
      year: "2024",
      description:
        "Computer vision with YOLOv8 (Ultralytics): running object detection, instance segmentation, image classification and pose estimation on the same images, fine-tuning a detector on the African Wildlife dataset (mAP@50 = 0.856), and inference on video.",
    },
    {
      id: "ml-unsupervised",
      title: "Unsupervised Learning – Music Clustering",
      platform: "IOC",
      year: "2024",
      description:
        "Clustering of music-streaming listener data (monthly minutes, platform frequency, age): silhouette analysis for choosing k, StandardScaler preprocessing, a Ward dendrogram, and a DBSCAN result visualized in PCA space.",
    },
    {
      id: "ml-vae",
      title: "Variational Autoencoder – Letter Generation",
      platform: "IOC",
      year: "2024",
      description:
        "VAE for generative modeling of handwritten letters: encoder with reparameterization trick, KL divergence + reconstruction loss, and sampling from the latent space.",
    },
    {
      id: "ml-autoencoder",
      title: "Autoencoder – Image Denoising",
      platform: "IOC",
      year: "2024",
      description:
        "Denoising autoencoder trained on an A–J handwritten-letters dataset: reconstructing clean glyphs from heavily speckle-noised inputs, shown through the training loss curve and original/noisy/denoised comparisons.",
    },
    {
      id: "ml-categorical",
      title: "Multi-Class Classification with BatchNorm & Dropout",
      platform: "IOC",
      year: "2024",
      description:
        "Deep neural network for multi-class tabular classification: BatchNormalization, Dropout regularization, ReduceLROnPlateau scheduling, and confusion matrix evaluation.",
    },
    {
      id: "ml-eac5",
      title: "Model Comparison – KNN, SVC, Decision Tree & Random Forest",
      platform: "IOC",
      year: "2024",
      description:
        "Comparison of four classifiers (KNN, SVC, Decision Tree, Random Forest) on the 3-class Palmer Penguins dataset, evaluated with per-model confusion matrices, a test-accuracy bar chart, and per-class precision/recall/F1.",
    },
    {
      id: "ml-lstm",
      title: "LSTM – Stock Price Prediction",
      platform: "IOC",
      year: "2024",
      description:
        "LSTM recurrent neural network for time-series stock price forecasting on two assets (2012–2024): sliding window encoding, MinMax scaling, and train/test split visualization.",
    },
    {
      id: "ia-asr-whisper",
      title: "Speech Recognition with Whisper (ASR)",
      platform: "IOC",
      year: "2024",
      description:
        "Automatic Speech Recognition with OpenAI Whisper: language detection, transcription, Word Error Rate (WER) and subtitle generation.",
    },
    {
      id: "ia-sentiment",
      title: "Sentiment Analysis of Reviews (NLP)",
      platform: "IOC",
      year: "2024",
      description:
        "Text sentiment classification on movie reviews with a bidirectional LSTM: tokenization, embeddings, training and evaluation.",
    },
    {
      id: "ia-voice-sentiment",
      title: "Voice Sentiment Analysis",
      platform: "IOC",
      year: "2024",
      description:
        "Speech emotion recognition on the RAVDESS dataset: audio features and mel spectrograms to classify the emotion conveyed in a voice.",
    },
    {
      id: "ai-asr-prototype",
      title: "Offline Speech Recognition Prototype (Vosk)",
      platform: "IOC",
      year: "2024",
      description:
        "A lightweight, fully offline speech-recognition prototype built with Vosk: local Spanish model, microphone streaming and real-time transcription.",
    },
    {
      id: "ai-rekognition-gradio",
      title: "Face Analysis with AWS Rekognition & Gradio",
      platform: "IOC",
      year: "2024",
      description:
        "A web app that detects faces in an image with AWS Rekognition and returns age, gender and emotion, wrapped in a Gradio interface and hosted on Hugging Face.",
    },
    {
      id: "ai-huggingface",
      title: "Hugging Face Pipelines – VQA, Document QA & Depth",
      platform: "IOC",
      year: "2024",
      description:
        "Exploring ready-made Hugging Face pipelines: visual question answering, document question answering and monocular depth estimation.",
    },
    {
      id: "bigdata-mongodb",
      title: "MongoDB – CRUD, Aggregation & Transactions (Atlas)",
      platform: "IOC",
      year: "2024",
      description:
        "Working with MongoDB Atlas with PyMongo: CRUD operations, aggregation pipelines, indexes and ACID transactions.",
    },
    {
      id: "bigdata-kafka",
      title: "Kafka – Real-time Producer & Consumer",
      platform: "IOC",
      year: "2024",
      description:
        "Real-time stream processing with a hands-on Kafka producer and consumer (Redpanda): producing to a topic, consuming, streaming and key-value processing.",
    },
    {
      id: "spark-bigdata",
      title: "Apache Spark – DataFrames, Delta Lake & Structured Streaming",
      platform: "IOC",
      year: "2024",
      description:
        "Distributed processing with PySpark: DataFrame transformations/actions, Delta Lake ACID tables (MERGE, time travel, VACUUM), and Structured Streaming — including an end-to-end Kafka → Spark → Delta-on-S3 pipeline on a Dockerized cluster.",
    },
    // ─── RAG & Log Detection ──────────────────────────────────────────────────
    {
      id: "rag-log-detection",
      title: "ML Model for Anomaly Log Detection",
      platform: "IOC",
      year: "2026",
      description:
        "Comparing eight classifiers on a labelled syslog dataset (SSH, FTP, web and cron events) to separate malicious from benign activity: feature engineering, an imbalanced ~3:1 split, and confusion-matrix model selection — the best model reaches ~99% accuracy (9 false positives and 9 false negatives on 1,931 test events).",
    },
    {
      id: "c2-log-generation",
      title: "Synthetic C2 Log Generation for ML Training",
      platform: "IOC",
      year: "2026",
      description:
        "Generating realistic labeled network log datasets combining normal traffic with simulated C2 beaconing (small payloads, fixed ports, regular intervals) for supervised ML training.",
    },
    // ─── Personal ─────────────────────────────────────────────────────────────
    {
      id: "utm-recovery",
      title: "UTM VM Recovery on Apple Silicon (ARM64)",
      platform: "Personal",
      year: "2026",
      description:
        "Recovering data from a broken UTM virtual machine on Apple Silicon: locating the .qcow2 file, converting with qemu-img, and mounting via a Linux rescue VM to access the filesystem.",
    },
    // ─── Ethical Hacking Web ──────────────────────────────────────────────────
    {
      id: "web-enumeration",
      title: "Web Enumeration – Nmap, WhatWeb, WAF & WPScan",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Enumerating a web target with Nmap service/OS detection, WhatWeb technology fingerprinting, WAF identification, and WPScan WordPress vulnerability scanning.",
    },
    {
      id: "web-phishing-auto",
      title: "Automated Phishing – SET & GoPhish",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Automated phishing campaign with Social Engineering Toolkit (SET) credential harvester and GoPhish framework: configuring sending profiles, landing pages, and tracking results.",
    },
    {
      id: "web-brute-xss",
      title: "Brute Force & XSS – Hydra, Burp Suite",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Web application brute force with Hydra and Burp Intruder, plus stored and reflected XSS injection and cookie theft via JavaScript payload.",
    },
    {
      id: "web-hacking1",
      title: "Web Hacking I – DVWA & OWASP Top 10",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Exploiting DVWA vulnerabilities: command injection, file upload bypass, CSRF, SQL injection and directory traversal on a deliberately vulnerable web application.",
    },
    {
      id: "web-practica7",
      title: "Web Pentesting – Local File Inclusion & Path Traversal",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Exploiting Local File Inclusion (LFI) and Path Traversal vulnerabilities: reading /etc/passwd, log poisoning for RCE, and null-byte bypass techniques.",
    },
    {
      id: "web-pentest",
      title: "Pentest Report – Full Web Application Assessment",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Full black-box pentest of a web application: reconnaissance, vulnerability scanning, exploitation of SQL injection and XSS, privilege escalation, and professional report writing.",
    },
    {
      id: "web-sqlmap",
      title: "SQLMap – Automated SQL Injection",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Automated SQL injection with SQLMap: detecting injectable parameters, extracting databases, tables and credentials, bypass techniques, and OS shell access.",
    },
    {
      id: "web-docker-wordpress",
      title: "Docker – Vulnerable WordPress Lab Setup",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Creating a purposely vulnerable WordPress environment with Docker Compose: configuring MySQL, WordPress with weak credentials, and exposing it for pentesting practice.",
    },
    {
      id: "web-privesc-linux",
      title: "Linux Privilege Escalation – SUID, Cron & Sudo",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Linux privilege escalation techniques: SUID binary abuse, writable cron jobs, sudo misconfigurations, weak file permissions, and kernel exploits.",
    },
    {
      id: "web-pentest2",
      title: "Pentest II – Internal Network Assessment",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Internal network pentest: ARP scanning, SMB enumeration, credential spraying, pass-the-hash, lateral movement and post-exploitation data exfiltration.",
    },
    {
      id: "web-hacking-xi",
      title: "Web Hacking XI – Advanced Exploitation",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Advanced web exploitation techniques including deserialization attacks, SSRF, XXE injection, JWT manipulation, and chaining multiple vulnerabilities for full compromise.",
    },
    // ─── Forensics (missing) ──────────────────────────────────────────────────
    {
      id: "forensics-bitcoin-anonymity",
      title: "Forensics – Bitcoin Anonymity & Dark Web Mixers",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Cryptocurrency forensics: tracing Bitcoin transactions on the blockchain, identifying mixing services, and analysing anonymisation techniques used in cybercrime.",
    },
    {
      id: "forensics-reverse-image",
      title: "Forensics – Reverse Engineering from Disk Image",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Reconstructing deleted files from a disk image: mounting raw images, recovering partitions, carving files with Autopsy/Sleuth Kit, and timeline analysis.",
    },
    {
      id: "forensics-metadata",
      title: "Forensics – Metadata Analysis",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Extracting and analysing file metadata with ExifTool and metagoofil: recovering GPS coordinates, author information, creation timestamps, and hidden document properties.",
    },
    {
      id: "forensics-practica-iii",
      title: "Phishing Campaign – Cloned Login Page",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Building a phishing campaign by hand: crafting a lure email with a company logo, cloning the target login page on Kali, and capturing submitted credentials.",
    },
    {
      id: "forensics-android",
      title: "Android Forensics – Acquisition & WhatsApp Downgrade Backup",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Forensic acquisition of Android devices: evidence-preservation precautions, device info via ADB/getprop, physical (dd) and logical (adb backup) extraction, and recovering WhatsApp data through a controlled APK downgrade, analysed with Autopsy.",
    },
    // ─── WiFi (missing) ───────────────────────────────────────────────────────
    {
      id: "wifi-intro",
      title: "WiFi Hacking – Introduction & Environment Setup",
      platform: "Bootcamp",
      year: "2025",
      description:
        "Setting up a WiFi hacking lab: monitor mode, wireless adapter configuration, channel scanning, and understanding 802.11 frame types before active attacks.",
    },
  ];

  // Estados
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("all");
  const [platformFilter, setPlatformFilter] = useState("all");
  const ITEMS_PER_PAGE = 6;
  const [page, setPage] = useState(1);

  // Filtrado
  const filteredProjects = ctfProjects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    const matchesYear = yearFilter === "all" || p.year === yearFilter;
    const matchesPlatform =
      platformFilter === "all" || p.platform === platformFilter;
    return matchesSearch && matchesYear && matchesPlatform;
  });

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProjects.length / ITEMS_PER_PAGE)
  );
  const startIdx = (page - 1) * ITEMS_PER_PAGE;
  const visible = filteredProjects.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState("auto");
  const navigate = useNavigate();

  useEffect(() => {
    if (containerRef.current) setContainerHeight(containerRef.current.scrollHeight);
  }, [page, filteredProjects]);

  const years = Array.from(new Set(ctfProjects.map((p) => p.year))).sort(
    (a, b) => b - a
  );
  const platforms = Array.from(
    new Set(ctfProjects.map((p) => p.platform))
  ).sort();

  return (
    <section
      id="ctf"
      className="w-full py-20 font-roboto transition-colors duration-500 bg-white text-gray-900"
    >
      <div className="max-w-5xl mx-auto px-8">
        <h1
          className="text-5xl font-extrabold mb-8 text-gray-900"
        >
          Writeups Finder
        </h1>

        {/* Filtros con diseño restaurado */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <input
            type="text"
            placeholder="Search for project or description..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-full md:w-1/2 px-4 py-3 rounded-xl border shadow-sm transition-colors duration-300 bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-600"
          />

          <select
            value={yearFilter}
            onChange={(e) => {
              setYearFilter(e.target.value);
              setPage(1);
            }}
            className="w-full md:w-1/4 px-4 py-3 rounded-xl border shadow-sm transition-colors duration-300 bg-white border-gray-300 text-gray-900 focus:border-blue-600"
          >
            <option value="all">All years</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>

          <select
            value={platformFilter}
            onChange={(e) => {
              setPlatformFilter(e.target.value);
              setPage(1);
            }}
            className="w-full md:w-1/4 px-4 py-3 rounded-xl border shadow-sm transition-colors duration-300 bg-white border-gray-300 text-gray-900 focus:border-blue-600"
          >
            <option value="all">All platforms</option>
            {platforms.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        {/* Tabla con diseño restaurado */}
        <div
          className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
          style={{ maxHeight: containerHeight + "px" }}
        >
          <div ref={containerRef} className="overflow-x-auto">
            <table
              className="w-full border-collapse rounded-xl overflow-hidden shadow-lg bg-gray-50"
            >
              <thead>
                <tr
                  className="bg-blue-600 text-white"
                >
                  <th className="p-4 text-left text-lg font-semibold">Project</th>
                  <th className="p-4 text-left text-lg font-semibold">Platform</th>
                  <th className="p-4 text-left text-lg font-semibold">Year</th>
                  <th className="p-4 text-left text-lg font-semibold">Description</th>
                </tr>
              </thead>

              <tbody>
                {visible.map((p) => (
                  <tr
                    key={p.id}
                    onClick={() => navigate(`/ctf/writeup/${p.id}`)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        navigate(`/ctf/writeup/${p.id}`);
                      }
                    }}
                    role="link"
                    tabIndex={0}
                    className="cursor-pointer transition-colors duration-300 border-b border-gray-200 hover:bg-blue-50 focus:bg-blue-50 focus:outline-none"
                  >
                    <td className="p-4 font-bold text-blue-900">
                      {p.title}
                    </td>
                    <td className="p-4 font-semibold text-gray-800">
                      {p.platform}
                    </td>
                    <td className="p-4 text-gray-700">{p.year}</td>
                    <td className="p-4 text-gray-700">
                      {p.description}
                    </td>
                  </tr>
                ))}
                {visible.length === 0 && (
                  <tr>
                    <td
                      colSpan="4"
                      className="p-6 text-center text-gray-600"
                    >
                      No results were found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Paginación */}
        <div className="flex items-center justify-between mt-8">
          <div className={`text-sm text-gray-700`}>
            Showing {startIdx + 1}-
            {Math.min(startIdx + ITEMS_PER_PAGE, filteredProjects.length)} of{" "}
            {filteredProjects.length}
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className={`px-3 py-1 rounded-md font-semibold focus:outline-none ${
                page === 1
                  ? "text-gray-300"
                  : "text-sky-600 hover:text-blue-900"
              }`}
            >
              Previous
            </button>

            <div className={`px-3 py-1 rounded-md text-gray-700`}>
              {page} / {totalPages}
            </div>

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className={`px-3 py-1 rounded-md font-semibold focus:outline-none ${
                page === totalPages
                  ? "text-gray-300"
                  : "text-sky-600 hover:text-blue-900"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
