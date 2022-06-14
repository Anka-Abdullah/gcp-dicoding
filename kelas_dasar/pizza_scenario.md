andai ingin mengembangkan bisnis restoran pizza, perlu website untuk mengembangkan bisnis.
ada 2 pendekatan teknologi untuk membangun sebuah aplikasi : 
1. on-premise
2. cloud computing.

server on-premise : server fisik / data center

umumnya model komputasi modern menggunakan arsitektur *CLIENT-SERVER*

client server merupakan software yang menghubungkan sistem client dengan sistem server


# Model Layana Cloud
1. _Infrastructure as a service (IaaS)_
    pada layanan ini cloud provider memberikan fleksibilitas dalam menyewa infrastruktur yang di butuhkan, seperti server, jaringan hingga storage. dengan *pay as you go* .
    GCE > Google computer Engine
    GCS > Google Cloud Storage

2. _Platform as a servide (PaaS)_
    digunakan saat ingin fokus pengembangan aplikasi dan tidak mau memikirkan soal infrastruktur.
    layanan ini bahkan bisa melakukan _scaling to zero_ (penyesuaian kapasitaas sampai tidak ada instance yang berjalan sama sekali), sehingga tidak perlu membayar apapun ketika tidak ada ermintaan traffic ke aplikasi anda.
    contoh : 
    + App Engine
    +  Cloud Function
    + Cloud Run

3. _Software as a service (SaaS)_
    SaaS adalah bentuk layanan cloud yang disediakan dalam bentuk software yang di jalankan oleh cloud provider
    contoh :
    + gmail
    + Google SpreadSheet, Google Doc


# Angaran
1. _Capital Expenditure (CapEx)_ 
    biaya untuk modal infrastruktur sebuah usaha
    contoh : gedung

2. _Operatong Expenditure (OpEx)_
    biaya operasional menjalankan perusahaan
    contoh : gaji karyawan


# Estimasi Biaya
mengestimasi biaya layana di GCP menggunakan tools *Pricing Calculator* (tools dari GCP)
 
 - _TCO (Total Cost Ownership)_
    total biaya untuk memiliki dan menggunakan sebuah aset selama masa penggunaan yang diharapkan.

# *Resource Hierarchy* / Hirarki Sumber Daya
bertujuan untuk membagi hak akses dalam mnegelola sumber daya dan memisahkan tugas antar tim.

semakin tinggi hirarki, maka akan semakin memiliki kontrol terhadap resource yang berada di bawahnya.

* _Resource_
    resource ini adalah komponen penting dari GCP. ia merupakan inti dari semua layanan, seperti instance pada layanan Compute Engine, Service pada AppEngine, dan Bucket pada Cloud Storage.

* _Projects_
    Setiap sumber daya yang kita gunakan dalam GCP akan ditempatkan dalam sebuah Projects.
    
    porject mempunyai hak akses yang bisa di bagikan,

    *project name* bisa di tentukan dapat diubah
    *project ID* adalah pengenal permanen, bisa di tentukan tidak bisa diubah
    *project number* dari GCP, unik secara global, tidak bisa di tentukan tidak bisa diubah

* _Folders_
     fitur dalam GCP yang dapat mengelompokkan Project ke dalam satu tempat.
     Folder dapat digunakan untuk mewakili berbagai departemen, seperti tim Finance, IT dan Recruitment (HR) sehingga lingkungan kerja dan sumber daya dapat dikelola secara terpisah.
     
     policy folder :  jika project_1 dan project_2 dikelola oleh tim yang sama di Folder A, kedua project tersebut akan memiliki policy yang sama. 
    
    Untuk menggunakan Folder, Anda memerlukan Organization di bagian atas hierarki. 

* _Organization_
    Organization Policy Administrator ini memiliki kontrol yang luas atas semua sumber daya cloud.
    Anda juga dapat menetapkan Project Creator kepada seseorang. Berbeda dengan role sebelumnya, role yang satu ini hanya memiliki kontrol atas pembuatan Project saja.

    organization node ini hanya tersedia untuk pelanggan yang memiliki domain sendiri menggunakan Google Workspace atau Cloud Identity.

    # Policy dalam lingkungan GCP akan diwariskan ke bawah dalam struktur hierarki sumber daya. Misalnya, jika Anda menetapkan policy di tingkat Organization, policy tersebut secara otomatis diwariskan ke semua Project di bawahnya. Pewarisan ini bersifat transitif, yang berarti semua sumber daya dalam Project tersebut juga akan mewarisi policy.

**__Rangkuman Cloud Computing__**
Sampailah kita di penghujung modul. Mari kita ulas kembali materi yang telah kita pelajari di modul ini:



Pengenalan Cloud Computing
Client-Server merupakan konsep arsitektur perangkat lunak atau software yang menghubungkan dua objek berupa sistem client dan sistem server yang saling berkomunikasi, baik melalui jaringan komputer maupun satu komputer yang sama. 
Client merupakan pengguna yang ingin mengakses aplikasi Anda.
Server akan memberikan informasi yang dibutuhkan oleh client dan menyediakan pengelolaan aplikasi, data, serta keamanan data. 
Data center adalah tempat di mana Anda mengelola server.
infrastruktur on-premise adalah jenis infrastruktur di mana Anda memiliki dan mengelola server fisik sendiri. Anda bertanggung jawab penuh terhadap kemampuan komputasi dan konfigurasi server, seperti seberapa banyak CPU, RAM, dan hard drive (penyimpanan file) yang dibutuhkan.
Cloud computing (komputasi awan) adalah layanan yang menyediakan sumber daya komputasi berdasarkan permintaan melalui internet. Ini dapat mempersingkat berbagai kebutuhan kita untuk mendapatkan, mengonfigurasi, dan mengelola sumber daya sendiri. Anda hanya membayar layanan yang sedang digunakan.
Dibandingkan dengan on-premise data center yang harus membeli dan mengonfigurasi server terlebih dahulu agar dapat diakses oleh pengguna, cloud computing mengatasi masalah tersebut dengan menawarkan sumber daya komputasi sebagai layanan yang dapat disesuaikan kapasitasnya (scalable). Bahkan, Anda dapat menyesuaikan sumber daya sesuai permintaan.
Keuntungan menggunakan cloud computing antara lain: 

Fleksibel
Efisien
Menawarkan Strategi Bisnis yang Bernilai Lebih
Aman
Hemat Biaya



Model Layanan Cloud
Infrastructure as a Service (IaaS)
Pada IaaS, cloud provider memberikan fleksibilitas untuk penggunanya dalam menyewa infrastruktur yang dibutuhkan, seperti server, jaringan, hingga storage (ruang penyimpanan file). Model layanan seperti ini sangat memudahkan pengguna dalam memenuhi kebutuhan infrastruktur karena kemampuan skalabilitas yang ditawarkan hampir tidak terbatas dan kita hanya perlu membayar sesuai apa yang digunakan (pay as you go).

Platform as a Service (PaaS)
PaaS merupakan model layanan cloud yang akan menyesuaikan sumber daya yang tepat untuk aplikasi Anda. Sehingga, Anda tidak perlu lagi memikirkan soal infrastruktur. Layanan PaaS bahkan bisa melakukan scaling to zero (penyesuaian kapasitas sampai tidak ada instance yang berjalan) sehingga Anda tidak perlu membayar apa pun ketika tidak ada permintaan traffic ke aplikasi Anda.

Software as a Service (SaaS)
SaaS adalah bentuk layanan cloud yang disediakan dalam bentuk software atau perangkat lunak yang dijalankan dan diatur oleh cloud provider. SaaS memberikan kemudahan kepada Anda untuk dapat memanfaatkan sumber daya perangkat lunak dengan cara berlangganan.

Anda tidak perlu memikirkan bagaimana layanannya dikelola atau infrastrukturnya diatur, Anda hanya perlu berlangganan dan tahu bagaimana cara menggunakan software tersebut.



Model Pembagian Tanggung Jawab
Ketika kita menggunakan layanan cloud, Anda akan berbagi tanggung jawab dengan penyedia layanan cloud tergantung model layanan yang digunakan.

Google sebagai penyedia layanan Google Cloud Platform bertanggung jawab terhadap pengelolaan infrastruktur, seperti keamanan, ketersediaan (Availability), dan keandalan (Reliability); sedangkan pengguna bertanggung jawab dalam mengamankan data yang akan disimpan. Google sebagai provider telah menyediakan praktik terbaik (best practices) bagaimana cara data Anda disimpan di GCP dengan baik dan benar. Jadi, Anda sebagai pengguna memiliki andil besar dalam pengelolaan aplikasi ataupun data yang disimpan.



CapEx vs OpEx
Capital Expenditure alias pembelanjaan modal adalah pengeluaran untuk membeli atau memiliki aset agar bisnis dapat berjalan dengan baik. Aset seperti server, perangkat jaringan, dan peralatan komputer merupakan contoh dari CapEx yang akan memiliki nilai yang semakin menurun (depresiasi) seiring dengan umur dari aset tersebut.

Di sisi lain, Operating Expenditure alias pembelanjaan operasional adalah pengeluaran yang dilakukan oleh sebuah bisnis untuk memenuhi kebutuhan operasional seperti gaji karyawan, listrik, pajak, dan hal-hal lainnya yang merupakan pengeluaran rutin atau bisa dikategorikan sebagai pengeluaran sehari-hari sebuah bisnis.

Jika OpEx diadopsi ke dalam bisnis, pengeluaran perusahaan menjadi lebih mudah diprediksi dan dialokasikan karena Anda tidak perlu biaya di awal untuk membeli aset, melainkan hanya perlu menyewa layanan atau produk yang ingin dipakai. Anda hanya akan ditagih sesuai dengan layanan yang digunakan.



Estimasi Biaya
Anda dapat mengestimasi biaya layanan di GCP menggunakan Pricing Calculator yang merupakan tools dari GCP yang berfungsi untuk mengestimasi total biaya (total cost) yang  dikeluarkan oleh pengguna untuk menggunakan layanan tertentu.

Total Cost Ownership (TCO) adalah total biaya untuk memiliki dan menggunakan sebuah aset selama masa penggunaan yang diharapkan. 

Anda dapat menggunakan tools Pricing Calculator untuk mengkaji total biaya yang akan dikeluarkan untuk aplikasi bisnis sehingga Anda dapat melakukan perbandingan biaya untuk setiap layanan dan memilih mana yang tepat sesuai kebutuhan Anda.



Hierarki Sumber Daya pada Google Cloud Platform
Hierarki sumber daya GCP jika diurutkan dari atas ke bawah maka urutannya adalah Organization -> Folders -> Projects -> Resources.
Semakin tinggi hierarki, maka akan semakin memiliki kontrol terhadap resource yang berada di bawahnya.
Semua sumber daya alias Resources yang Anda gunakan, baik itu mesin virtual, storage, database, atau apa pun di GCP, mereka dikelompokkan ke dalam Projects. 
Jika Anda memiliki beberapa projects dan ingin mengelompokkannya ke satu tempat, Anda dapat menggunakan Folders.
Project yang berada di dalam suatu Folder akan mewarisi policy dari Folder tersebut. 
Semua Folders dan Projects yang digunakan oleh perusahaan Anda dapat disatukan di bawah Organization.
Baik Projects, Folders, maupun Organization adalah tempat-tempat di mana policy (kebijakan) dapat didefinisikan. 
Policy dalam lingkungan GCP akan diwariskan ke bawah dalam hierarki.


