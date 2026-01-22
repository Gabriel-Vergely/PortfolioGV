export const writeups = {
    bandit: {
      title: "Bandit Writeup",
      content: `
  Bandit is a series of wargame exercises on OverTheWire
  designed to teach beginners the basics of Linux, command-line tools, and security concepts. 
  Each level requires you to find a password to progress to the next level, often using commands 
  like cat, ls, grep, ssh, and others.
  
  **Bandit0:**
  
  First, connect to bandit0 via SSH using the password bandit0: 
  
  \`ssh bandit0@bandit.labs.overthewire.org -p 2220\`
  
  ![Connection to bandit0](/writeups/bandit/bandit0/bandit0.png)

  read the readme:
  
  \` nano readme \`

  ![README content](/writeups/bandit/bandit0/readme_bandit0.png)

  **Bandit1:**

  Connect to bandit1:

  ![Connection to bandit0](/writeups/bandit/bandit1/bandit1_acces.png)

  Enter the document “-”:

  \` nano ./-  \`

  ![Command to read -](/writeups/bandit/bandit1/bandit1.png)

  extract the password:

  ![The password in the file](/writeups/bandit/bandit1/bandit1_pswd.png)

  **Bandit2:**

  Connect to bandit2, then access the file “spaces in this file”:

  ![Command to read the file](/writeups/bandit/bandit2/bandit2_com.png)

  read the password:

  ![The password](/writeups/bandit/bandit2/bandit2psw.png)

  **Bandit3:**

  Connect to bandit3 and then view hidden documents:

  \`\`\`bash 
  ls -a  
  cd inhere
  ls -la
  \`\`\`

  ![hidden files](/writeups/bandit/bandit3/find_file_bandit3.png)

  Get password for file “...Hiding-From-You”:

  \` cat ./ ...Hiding-From-You \`

  ![Content file](/writeups/bandit/bandit3/bandit3_pswd.png)

  **Bandit4:**

  Connect to bandit4 and then go to the inhere folder:

  \`\`\`bash 
  ls 
  cd inhere
  \`\`\`

  obtain the passwod using the following command:

  \` cat ./-file0* \`

  ![Content file](/writeups/bandit/bandit4/solution.png)

  **Bandit5:**

  Connect to bandit5. We need to find a file that meets various criteria specified in the bandit5 statement. We will do this using the following command:

  \` cat $(find inhere/ -type f -size 1033c ! -executable) \`

  ![Command output](/writeups/bandit/bandit5/solution_bandit5.png)

  **Bandit6:**

  Connect to bandit6 and do the same as before, but with different criteria.

  \` cat $(find / -type f -size 33c -user bandit7 -group bandit6) \`

  ![Command output](/writeups/bandit/bandit6/solution_bandit6.png)

  **Bandit7:**

  Connect to bandit7 and find the password near the word “milionth.”

  \` grep "millionth" data.txt \`

  ![Command output](/writeups/bandit/bandit7/solution_bandit7.png)

  **Bandit8:**

  Connect to bandit8 and find the password that is the only one that does not repeat itself.

  \` sort data.txt | uniq -u \`

  ![Command output](/writeups/bandit/bandit8/solution_bandit8.png)

  **Bandit9:**

  Connect to bandit9 and get text strings next to “=”.

  \` strings data.txt | grep "=" \`

  ![Command output](/writeups/bandit/bandit9/solution9.png)

  **Bandit10:**

  Connect to bandit10

  Decompress a file to base64

  \` base64 -d data.txt | cat \`

  ![Command output](/writeups/bandit/bandit10/bandit10.png)

  **Bandit11:**

  Connect to bandit11 

  Decrypt in 13 positions

  \` cat data.txt | tr "A-Za-z" "N-ZA-Mn-za-m" \`

  ![Command output](/writeups/bandit/bandit11/bandit11.png)

  **Bandit12:**

  Connect to bandit12

  First, we go to the tmp directory and create a temporary directory where we will copy data.txt, rename it, and convert it from hexdump to binary:

  ![Command output](/writeups/bandit/bandit12/bandit12.png)

  We check the content:

  \`\`\`bash 
  cat compressed_data | head
  cat hexdump_data
  \`\`\`

  ![Command output](/writeups/bandit/bandit12/bandit12.1.png)

  We check the first line to see which method has been used. In this case, it is 1fb08, which indicates that it has been compressed with gzip.

  We rename the file with the .gz extension and decompress it with gzip:

  \`\`\`bash 
  mv compressed_data compressed_data.gz
  ls
  gzip -d compressed_data.gz
  ls
  xxd compressed_data
  \`\`\`

  ![Command output](/writeups/bandit/bandit12/bandit12.2.png)

  Let's look at the compression code again. In this case, it is 425a68, which indicates that bzip2 has been used.

  We rename the file with the .bz2 extension, decompress it, and do the same with gzip:

  \`\`\`bash 
  mv compressed_data compressed_data.bz2
  ls
  bzip2 -d compressed_data.bz2
  mv compressed_data compressed_data.gz
  gzip -d compressed_data.gz
  ls
  cat compressed_data
  xxd compressed_data | head
  \`\`\`

  ![Command output](/writeups/bandit/bandit12/bandit12.3.png)

  We see that compressed_data contains a data5.bin file, which we will extract with tar.

  We change to the tar extension and decompress it, obtaining data5.bin, and do the same thing to obtain data6.bin:

  \`\`\`bash 
  mv compresses_data compressed_data.tar
  tar -xf compressed_data.tar
  ls
  tar -xf data5.bin 
  xxd data6.bin  
  \`\`\`

  ![Command output](/writeups/bandit/bandit12/bandit12.4.png)

  We verified that the data6.bin file has been compressed with bzip2.

  We decompress directly with .bin in addition to creating a tar file to obtain data8.bin:

  \`\`\`bash 
  bzip2 -d data6.bin (Sale un mensaje que dice que usará de nombre data6.bin.out)
  ls
  tar -xf data6.bin.out
  ls
  xxd data8.bin
  \`\`\`

  ![Command output](/writeups/bandit/bandit12/bandit12.5.png)

  We see that it has been compressed with gzip. 

  We perform the final decompression with gzip to finally obtain the password:

  \`\`\`bash 
  mv data8.bin data8.gz
  gzip -d data8.gz
  ls
  cat data8
  \`\`\`

  ![Command output](/writeups/bandit/bandit12/bandit12.6.png)

  **Bandit13**

  Connect to bandit13 via SSH and install the private key for bandit14.

  Connect to bandit13 and view the private key:
  
  \` cat ssh_privateKey.rsa \`

  Copy the key and exit the SSH session.

  Create private_key.rsa locally and paste the key inside:

  \`\`\`bash 
  nano private_key.rsa
  # paste key, save & exit
  chmod 600 private_key.rsa
  \`\`\`

  SSH into bandit14 (note custom port 2220):

  \` ssh -i private_key.rsa bandit14@bandit.labs.overthewire.org -p 2220 \`



  **Bandit14:**

  Read the next level password from /etc/bandit_pass and send it to the next service.

  \`\`\`bash 
  cd /etc/bandit_pass
  cat bandit14
  \`\`\`

  Send the password to localhost port 30000 using netcat:

  \` echo "MU4VWeTyJk8ROof1qqmcBPaLh7lDCPvS" | nc localhost 30000 \`


  **Bandit15:**

  Connect to an SSL/TLS service on localhost:30001 using openssl s_client and provide the previous password interactively.

  \`\`\`bash 
  # s_client indicates acting as an SSL/TLS client
  openssl s_client -connect localhost:30001
  # then type the previous level's password when prompted
  \`\`\`
  `,
    },
    natas: {
      title: "Natas writeup",
      content: `
  Natas is a web security wargame on OverTheWire
  that focuses on teaching the basics of web vulnerabilities, such as SQL injection, XSS, command 
  injection, and file inclusion. Each level presents a web challenge where you need to exploit 
  vulnerabilities to find the password for the next level.

  **Natas0:**

  go to this URL: http://natas0.natas.labs.overthewire.org

  put the user and password of this level 

  Inspect the page and u will find the password for the next one.

  ![Content file](/writeups/natas/natas0/natas0.png)

  **Natas1:**

  go to this URL: http://natas1.natas.labs.overthewire.org

  put the user and password of this level 

  Inpesct the page (ctr + shift + i) the right-click block does not affect access to the page’s source code. 

  ![Content file](/writeups/natas/natas1/natas1.png)

  **Natas2:**

  go to this URL: http://natas2.natas.labs.overthewire.org

  put the user and password of this level 

  Inpesct the page (ctr + shift + i) we see an imagen in the file "files"

  We can explore that file going to: http://natas2.natas.labs.overthewire.org/files

  ![Content file](/writeups/natas/natas2/natas2.png)

  **Natas3:**

  go to this URL: http://natas3.natas.labs.overthewire.org

  put the user and password of this level 

  go to /robots.txt

  We will find a secret directory /s3cr3t/

  We can explore that file going to: http://natas3.natas.labs.overthewire.org/s3cr3t

  If we open users.txt, the password will be there

  ![Content file](/writeups/natas/natas3/natas3.png)

  **Natas4:**

  go to this URL: http://natas4.natas.labs.overthewire.org

  put the user and password of this level 

  For this level we need open burpsuite

  Using it intercept the request when refreshing the page

  Send the request to the Repeater and change the Referer header from natas4 to natas5.

  ![Content file](/writeups/natas/natas4/natas4.png)

  The password can be found in the response.

  ![Content file](/writeups/natas/natas4/natas4_pass.png)

  **Natas5:**

  go to this URL: http://natas5.natas.labs.overthewire.org

  put the user and password of this level 

  For this level we need open burpsuite

  Using it intercept the request when refreshing the page

  We notice a cookie with the value login=0, change it to login=1

  Send the request

  ![Content file](/writeups/natas/natas5/natas5.png)

  The password can be found in the response.

  ![Content file](/writeups/natas/natas5/natas5_pass.png)

  **Natas6:**

  go to this URL: http://natas6.natas.labs.overthewire.org

  click to view source we will see a file 

  Go to /includes/secret.inc 

  Inspect the page and there is our secret

  ![Content file](/writeups/natas/natas6/natas6.png)

  Put the secret in the input of the first page.

  ![Content file](/writeups/natas/natas6/natas6_pass.png)

  **Natas7:**

  go to this URL: http://natas7.natas.labs.overthewire.org

  Open the inspector in home or about

  We will find a hint about where is the password

  ![Content file](/writeups/natas/natas7/natas7_hint.png)

  To reach that address, we need a Local File Inclusion (LFI), which allows us to traverse directories and access /etc/ files.

  ex: 

  \`\`\`
  ../../../../../../../../../etc/natas_webpass/natas8
  \`\`\`

  ![Content file](/writeups/natas/natas7/natas7_lfi.png)

  **Natas8:**

  go to this URL: http://natas8.natas.labs.overthewire.org

  Click on view sourcecode

  We can see that the secret key has been encoded in hexadecimal, reversed, and then base64-encoded. 

  We decode it in that order and enter it into the secret input.

  ![Content file](/writeups/natas/natas8/natas8.png)

  **Natas9:**

  go to this URL: http://natas9.natas.labs.overthewire.org

  By looking at the source code, we see that command injection is possible.

  ![Content file](/writeups/natas/natas9/natas9_ci.png)

  By injecting 
  
  \`\`\` ; cat /etc/natas_webpass/natas10 \`\`\`
  
  into the input field, it returns:

  ![Content file](/writeups/natas/natas9/natas9_pass.png)

  **Natas10:**

  go to this URL: http://natas10.natas.labs.overthewire.org

  After inspecting the source code, we notice the use of preg_match, which restricts specific characters. 

  The solution is to bypass the filter by using: 
  
  \`\`\` "" /etc/natas_webpass/natas11 \`\`\`

  ![Content file](/writeups/natas/natas10/natas10.png)

  **Natas11:**

  go to this URL: http://natas11.natas.labs.overthewire.org

  Go to php code simulator online or to your editor. 

  ![Content file](/writeups/natas/natas11/natas11_oe.png)

  When you get the cookie to obtain the key, you have to click on “show decoded URL” and put it in 
  the chef along with the previous result as the key. 

  ![Content file](/writeups/natas/natas11/natas11_chef.png)

  Do the reverse to obtain the cookie with showpassword yes and be able to see the password.

  ![Content file](/writeups/natas/natas11/natas11_reverse.png)
  
  Put the result in the cookie value and reload the page ctrl+f5

  ![Content file](/writeups/natas/natas11/natas11_cookie.png)

  ![Content file](/writeups/natas/natas11/natas11_pass.png)

  **Natas12:**

  go to this URL: http://natas12.natas.labs.overthewire.org

  After registering, we see the code where there is no extension control; it only says .jpg once uploaded, but it does not censor. 

  Let's create a .php document or one with a double extension (in my case, .php.rtf). 
  
  with this code:

  \`\`\` <?php echo exec("cat /etc/natas_webpass/natas13"); ?> \`\`\`

  we upload it to the website:

  ![Content file](/writeups/natas/natas12/natas12_upld.png)

  Once selected in the inspector, we change the extension from .jpg to .php:

  ![Content file](/writeups/natas/natas12/natas12_extension.png)

  Now we click on upload file when the message appears saying that it has been successful. We select the file path so that the code inside is executed and shows us the password:

  ![Content file](/writeups/natas/natas12/natas12_pass.png)

  Since it is a double extension, more information than necessary is displayed. The password is: trbs5pCjCrkuSknBBKHhaBxq6Wm1j3LC

  **Natas13:**

  go to this URL: http://natas13.natas.labs.overthewire.org

  Looking at the page code, we see that it only supports images (exif_imagetype()). To parse it, we will use hexeditor.

  We create a file with nano “natas13.jpg” and write the code.
  
  \`\`\` hexeditor -b natas13.jpg \`\`\`

  Press Ctrl+A four times and replace the spaces with FF D8 FF D8. Finally, save it.

  Now select it to be loaded and change the extension to php in the inspector. 

  ![Content file](/writeups/natas/natas13/natas13_fu.png)

  When you click “upload”:

  ![Content file](/writeups/natas/natas13/natas13_uploaded.png)

  If we enter and run the code, the password will appear with 4 symbols in front of it, which are FFD8FFD8.

  ![Content file](/writeups/natas/natas13/natas13_pass.png)

  **Natas14:**

  go to this URL: http://natas14.natas.labs.overthewire.org

  Enter the URL.

  We see in the code that it is vulnerable to SQL injection.

  We enter the username and password: 
  
  \`\`\` “OR ‘1’=”1" \`\`\`

  ![Content file](/writeups/natas/natas14/natas14_pass.png)

  **Natas15:**

  go to this URL: http://natas15.natas.labs.overthewire.org

  In this code, we see that there is an input field for the username, and it responds whether or not it exists. 
  
  Here, we will need to create a script that extracts the password letter by letter.

  This is the script:

  ![Content file](/writeups/natas/natas15/natas15_script.png)

  This is what it looks like when you run it:

  ![Content file](/writeups/natas/natas15/natas15_execution.png)

  

  

  



      `,
    },
    network: {
      title: "Network Intrusion Analyzer Writeup",
      content: `
  Implementé un analizador de tráfico en tiempo real:
  
  - Usé **Scapy** para capturar paquetes.
  - Entrené un modelo de **Machine Learning** para clasificar anomalías.
  - Logré detectar intrusiones en CTF con un 90% de efectividad.
  
  ![Captura de tráfico con Wireshark](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Wireshark_icon.svg/240px-Wireshark_icon.svg.png)
      `,
    },
    stego: {
      title: "StegoHunter Writeup",
      content: `
  Automatización de retos de **esteganografía**:
  
  - Herramientas usadas: ` + "`steghide`, `zsteg`" + `.
  - Scripts en **Bash** y **Python** para probar contraseñas.
  - Detecté patrones ocultos en imágenes y audio.
  
  ![Esteganografía ejemplo](https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Steganography.png/320px-Steganography.png)
      `,
    },
  };
  