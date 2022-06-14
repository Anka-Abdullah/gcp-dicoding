Rangkuman Kelas

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

Server dan Jaringan

Server di GCP 
Cara kerja server di GCP dibagi dan disewakan sesuai dengan kebutuhan pelanggan. 

Server ini dibagi dengan menggunakan metode virtualisasi, yakni membagi berbagai sumber daya server sesuai dengan kebutuhan menggunakan sebuah software yang dinamakan Hypervisor. 

Hypervisor dapat memisahkan sumber daya fisik dan membaginya di lingkungan virtual. Dari situlah server-server di cloud dapat dikostumisasi di lingkungan virtual. 

Google Compute Engine (GCE) merupakan layanan Infrastructure as a Services (IaaS) di mana Kostumisasi server yang ditawarkan oleh GCE terbagi menjadi beberapa pilihan, yakni:

Predefined Machine types
Tipe mesin siap pakai yang sudah disediakan oleh Google yang dikategorikan berdasarkan workload-nya sehingga Anda tinggal memilih nama tipe mesin yang sekiranya sesuai dengan kebutuhan Anda.
Custom Machine types
Anda dapat membuat VM (virtual machine) dengan menentukan sendiri berapa jumlah memori dan vCPU (Virtual CPU) yang dibutuhkan.
Sistem Operasi dan Penyimpanan Berkas File Sistem
Anda dapat memilih sistem operasi yang berjalan pada VM dan menentukan seberapa banyak penyimpanan file sistemnya.
Preemptible Machines
Ini merupakan pilihan alternatif VM yang penggunaannya hanya cocok digunakan untuk aplikasi yang dapat mentoleransi kesalahan jika sewaktu-waktu instance yang memprosesnya berhenti.
Confidential Computing
Jika merasa data yang disimpan sangat rahasia (confidential) dan harus memenuhi aturan keamanan yang lebih ketat, terdapat dua pilihan menarik untuk itu, yakni:
Sole Tenant Node
VM yang berdiri sendiri dan tidak terbagi dengan pelanggan lain.
Shielded VM
VM yang diperkuat dengan serangkaian kontrol keamanan dari GCP untuk mencegah adanya perubahan boot sector yang diakibatkan oleh serangan virus atau perangkat lunak jahat yang dapat mengubah file sistem.
GCE dibekali fitur rightsizing recommendation yang berfungsi untuk merekomendasikan ukuran VM yang sesuai dengan workload yang dibutuhkan layanan setelah VM dijalankan. 

Fitur ini menganalisis secara otomatis dan merekomendasikan untuk menaikkan atau menurunkan kemampuan komputasi VM yang telah kita jalankan di GCE. 

Google Cloud juga menawarkan beberapa layanan alternatif seperti Google App Engine yang merupakan layanan jenis Platform as a Service (PaaS) di mana Anda hanya fokus menulis kode untuk aplikasi Anda dan tidak perlu mengustomisasi server yang dibutuhkan.

Selain itu, ada juga Google Kubernetes Engine (GKE) yang merupakan jenis layanan GCP yang memadukan teknologi hybrid. Itu artinya, teknologi IaaS dan PaaS digabungkan menjadi sebuah layanan di mana Anda sebagai pengguna dapat mengustomisasi beberapa konfigurasi sesuai yang Anda inginkan, seperti ketersediaan (Availability) dan ketahanan (Reliability) dari server yang dikelola oleh cloud provider.

Terdapat juga Cloud Run yang merupakan layanan yang dapat dengan mudah mengembangkan dan men-deploy aplikasi container di mana pengelolaan infrastruktur dikelola sepenuhnya oleh provider cloud.

Terakhir, ada Cloud Function. Ia merupakan layanan yang memungkinkan Anda untuk menjalankan kode sederhana tanpa memikirkan pengelolaan server.

 

Jaringan di GCP
Jaringan (Networking) merupakan sistem atau mekanisme sekumpulan perangkat komputasi seperti komputer, server, ataupun perangkat jaringan lain yang saling berkomunikasi melalui media transmisi atau media komunikasi supaya dapat berbagi data antara satu dengan yang lainnya. Contoh jaringan adalah Internet yang menghubungkan jutaan orang di seluruh dunia. 

Perlu Anda ketahui bahwa jaringan Google Cloud Platform terbentuk dari jaringan terbesar milik Google (Google Network) yang tersebar melalui kabel bawah laut dan menghubungkan seluruh benua yang ada di dunia. 

Google memiliki lebih dari 100.000 KM fiber optik dengan 28 regions dan 85 zones yang saling terhubung sehingga antarnegara dan benua di seluruh penjuru dunia dapat saling berkomunikasi dengan lancar nan cepat.


Zones dan Regions
Zone adalah suatu wilayah yang mewakili data center milik Google. Zones merupakan area deployment untuk sumber daya yang ada di GCP yang bertempat di wilayah tertentu dengan keamanan tinggi. 

Antar-zone dalam region yang sama berjarak minimal 160 KM dan dihubungkan dengan koneksi super cepat sehingga menghasilkan latensi yang sangat rendah. 

Region adalah wilayah geografis yang terdiri dari beberapa zona (zones), tetapi letak setiap zona akan berbeda satu dengan yang lainnya dalam wilayah tersebut. Di GCP, Regions minimal terdiri dari tiga zone yang berbeda dan akan selalu tersedia.



Virtual Private Cloud (VPC)


Virtual Private Cloud (VPC) adalah mekanisme jaringan virtual yang memudahkan Anda untuk bisa berkomunikasi antar-region di GCP. Karena VPC bersifat global, itu artinya Anda dapat mengatur dan mengelola komunikasi secara leluasa mencakup jaringan Google yang tersebar di seluruh dunia.

VPC merupakan solusi pengelolaan jaringan yang lebih mudah dan scalable sehingga Anda dapat menyesuaikan kapasitas jaringan yang bekerja di suatu wilayah.

VPC juga berguna untuk mengisolasi lingkungan jaringan satu sama lain tanpa harus mengelola jaringan fisik seperti kabel data center ataupun routing antarserver secara langsung. Ibarat kata, Anda bisa mengonfigurasi jaringan antarnegara dan antarbenua semudah menjentikkan ibu jari.



Objek-Objek VPC

Network merupakan bentuk abstraksi dari sebuah jaringan yang terhubung satu sama lain di lingkungan GCP. Network di GCP bersifat global yang meliputi semua region yang tersedia di seluruh dunia.

IP (Internet Protocol) Address merupakan alamat virtual yang Anda miliki sebagai identitas saat berkomunikasi di jaringan.  IP address dibagi menjadi dua jenis berdasarkan cakupannya, yakni IP publik dan IP privat.
 
IP publik merupakan alamat IP yang dapat digunakan untuk mengakses jaringan internet secara global.

IP privat digunakan untuk komunikasi lokal saja. Komunikasi lokal tidak memerlukan internet agar saling terhubung. Alamat IP privat tidak boleh terpublikasi secara global dan tidak akan bisa digunakan untuk tanda pengenal ketika kita berkomunikasi melalui internet sesuai dengan aturan yang dikeluarkan oleh Internet Assigned Number Authority (IANA).

IANA merupakan lembaga yang mengatur pengalokasian alamat IP yang berlaku di seluruh dunia. Khususnya untuk pengalokasian dan penggunaan IP privat tertuang dalam aturan RFC 1918 yang menjadi patokan ketika kita ingin membagi lingkungan jaringan lokal yang biasa disebut sebagai mekanisme subnet.

Subnet merupakan cara pembagian atau pemisahan lingkungan kerja jaringan. Kenapa jaringan perlu dibagi dan dipisah? Tentu ini untuk memudahkan kita dalam mengenali dari mana client berasal sehingga dapat berkomunikasi dengan layanan yang diinginkan dan pembagian lingkungan kerja yang lebih jelas.

Pemantauan

Cloud Monitoring
Cloud Monitoring merupakan alat yang digunakan untuk memantau berbagai sumber daya. Menariknya, ia dapat digunakan di berbagai lingkungan cloud, seperti Google Cloud ataupun Amazon Web Service (AWS).

Anda dapat membuat tampilan pemantauan dengan kustomisasi sendiri yang terdiri dari diagram dan chart yang menunjukkan metrik-metrik secara real time (langsung) dengan mudah sehingga Anda mendapatkan pandangan atau wawasan lebih mendalam mengenai sumber daya yang Anda miliki. 

Beberapa metrik yang tersedia antara lain:

CPU Utilization: Menunjukkan penggunaan CPU
Network Traffic: Menunjukkan lalu lintas jaringan yang terjadi di layanan yang Anda gunakan
Uptime Check: Menampilkan ketersediaan sumber daya Anda, apakah berjalan tanpa masalah atau tidak.
Di samping itu, layanan ini bisa mengirimi Anda pesan berupa notifikasi peringatan (Alert Notification) melalui email ataupun SMS jika sumber daya mengalami masalah.


Cloud Logging
Cloud Logging memudahkan Anda dalam mencari, menganalisis, menyimpan, memonitor, dan memberikan peringatan tentang log data ataupun kejadian (events) yang terjadi di lingkungan GCP ataupun AWS.

Cloud Logging akan mencatat kejadian apa pun yang terjadi di sumber daya Anda.


Storage dan Database
Terdapat tiga macam jenis data, yakni structured data, semi-structured data, dan unstructured data. 

Structured data merupakan data yang dikelola dan disimpan dengan format tabel yang terdiri dari baris dan kolom, seperti halnya Anda menyimpan sebuah data di Spreadsheet atau Excel.

Unstructured data merupakan data yang bentuknya bermacam-macam sehingga biasanya mempunyai format khusus dalam penyimpanan setiap jenis datanya. Contoh jenis data tidak terstruktur adalah data berformat gambar, video, atau suara seperti foto, film, maupun rekaman audio.

Data semi-terstruktur merupakan jenis data yang memiliki karakteristik campuran dari data terstruktur dan data tidak terstruktur. Data ini dapat berupa tabel, tetapi skema penyimpanan datanya mungkin berbeda: tidak menggunakan baris dan kolom, melainkan menggunakan format tertentu.


Tipe-Tipe Data Storage
Terdapat tiga tipe data storage: File Storage, Block Storage, dan Object Storage.

Block storage adalah format penyimpanan data yang terkelola dalam sebuah volume (wadah) yang dapat diatur sesuai keinginan pengguna. Contoh block storage adalah Persistent disk. Ia layaknya hard disk yang menyimpan file sistem operasi dan juga wadah penyimpanan file yang Anda simpan pada sebuah sistem operasi.

Persistent disk dapat melakukan mekanisme Snapshot atau pencadangan disk.

Snapshot adalah mekanisme pencadangan disk yang akan mencadangkan data secara inkremental atau bertahap. Jadi, ketika kita melakukan pencadangan pertama kali, semua konten yang ada pada disk akan disimpan. Lalu, ketika setiap kali kita melakukan snapshot kedua ataupun seterusnya, disk yang memiliki perubahan saja yang akan disimpan pada snapshot baru. 

Object storage merupakan format penyimpanan data untuk data yang tidak terstruktur. Contoh layanan yang dapat Anda pakai untuk object storage adalah Google Cloud Storage (GCS).

Google Cloud Storage (GCS) adalah layanan dari Google Cloud untuk menyimpan segala data yang tidak terstruktur, seperti gambar, video, file, skrip, hingga data backup.

Pada GCS, object akan disimpan dalam sebuah wadah yang bernama bucket. Untuk bisa menyimpan berbagai macam data ke dalam bucket, Anda harus menamai bucket dengan unik secara global. 

Kelas Penyimpanan dan Lifecycle Management

GCS memiliki empat kelas penyimpanan, yakni Standar (untuk menyimpan data yang sering diakses), Nearline (untuk menyimpan data yang 30 hari sekali diakses), Coldline (untuk menyimpan data 90 hari sekali diakses), dan Archive (untuk menyimpan data 1 tahun sekali diakses). 

Masing-masing kelas penyimpanan tersebut juga menyediakan tiga pilihan berdasarkan jenis lokasinya seperti Multi-region, Dual-Region, dan Region.

GCS juga memiliki berbagai fitur canggih, salah satunya adalah Object Lifecycle Management. Pada fitur ini, Anda dapat menentukan aturan yang mengatur apa yang akan terjadi pada object yang disimpan di bucket ketika suatu kondisi terpenuhi. 

File storage merupakan tipe data storage yang penyimpanan datanya berbasis hierarki file. Ini berarti file disimpan sebagai satu bagian informasi di suatu hierarki atau tingkatan, seperti folder dan file. Contohnya, ketika Anda perlu mengakses data yang tersimpan di file storage, Anda hanya perlu mengetahui jalur folder (path) untuk menemukannya. Data disimpan, diatur, dan diambil menggunakan metadata yang memberi tahu komputer dengan tepat di mana file berada.

Google Filestore merupakan layanan yang dapat membantu Anda mengelola penyimpanan file dengan mekanisme NFS (Network File System) secara terkelola. Biasanya, Filestore digunakan untuk aplikasi yang membutuhkan file system interface (antarmuka file) dan shared file system (berbagi file system) yang menawarkan latensi rendah sehingga memudahkan dalam mengakses penyimpanan data. 



Tipe-Tipe Database
Pada umumnya, terdapat dua tipe database yang sering kita pakai untuk menyimpan data pada sebuah aplikasi. Dua tipe database tersebut adalah relational database dan non-relational database.

Relational database merupakan database yang skema penyimpanan datanya berupa tabel yang berisi baris (mewakili entri data) dan kolom (menyimpan dan mengurutkan informasi). Database ini digunakan untuk menyimpan data yang terstruktur ke dalam tabel. Anda bisa bayangkan relational database seperti spreadsheet atau file excel yang sering kita gunakan untuk mengelola dan menyimpan data dalam bentuk tabel.

Database ini dalam pengelolaan datanya menggunakan bahasa kueri, yakni SQL (structured query language). SQL digunakan untuk mengelola relational data seperti membuat kueri, memperbarui, mengedit, atau menghapus data.

Contoh relational database adalah MySQL, PostgreSQL, Microsoft SQL Server, dan MariaDB. Google Cloud menyediakan beberapa pilihan layanan untuk mengelola relational database seperti Cloud SQL dan Cloud Spanner. 

Non-relational database merupakan database yang menyimpan data tanpa menggunakan skema yang kaku, ia bisa berupa key-value, dokumen, grafik, wide-column, dsb. 

Dibandingkan dengan relational database yang tata letak datanya berbasis tabel, non-relational database tidak memiliki skema data yang baku sehingga struktur penyimpanan datanya dapat bervariasi. 

Database ini dikenal sebagai NoSQL (Not Only SQL) database atau ‘Tidak Hanya SQL’ karena ia dapat menggunakan bahasa kueri lain bergantung pada tata letak datanya yang bisa saja dalam format non-standar.

Contoh non-relational database di antaranya adalah MongoDB, Cassandra, dan Redis. Nah, Google Cloud menyediakan layanan untuk tipe database ini seperti Firestore dan Bigtable.



Solusi database di GCP

Layanan Relational Database
Cloud SQL adalah layanan untuk relational database yang terkelola sepenuhnya oleh Google Cloud yang kompatibel dengan berbagai macam jenis layanan relational database seperti SQL Server, MySQL, dan PostgreSQL. 

Cloud SQL memiliki berbagai fitur seperti pencadangan otomatis, replikasi data, dan pemulihan bencana (disaster recovery) untuk memastikan ketersediaan dan ketahanan yang tinggi. 

Anda dapat mengintegrasikan layanan ini dengan berbagai layanan Google Cloud lainnya seperti Compute Engine, App Engine, BigQuery, dan Kubernetes.

Cloud Spanner adalah layanan untuk relational database yang memiliki ketersediaan secara global yang terkelola sepenuhnya oleh Google Cloud. Layanan ini dapat menyediakan kapasitas hingga petabyte dan menawarkan konsistensi transaksional pada skala global, keamanan bawaan yang handal, dan replikasi sinkron otomatis untuk ketersediaan tinggi.

Cloud Spanner biasanya digunakan dalam aplikasi keuangan, inventaris, fintech, dan perbankan yang membutuhkan performa dan konsistensi tingkat global yang tinggi dalam pengelolaan dan akses database. 

Jika Anda membutuhkan lebih dari 30 TB ruang penyimpanan, lebih dari 4000 koneksi serentak ke database, atau ingin menyerahkan tanggung jawab atas scaling (penyesuaian kapasitas), ketersediaan, dan manajemen lokasi kepada Google, pertimbangkanlah untuk menggunakan Cloud Spanner.

Jika Anda memiliki persyaratan tertentu seperti konfigurasi sistem operasi, basis data khusus, atau persyaratan cadangan khusus, pertimbangkan untuk meng-hosting database Anda sendiri di VM menggunakan Compute Engine. Jika tidak, sangat disarankan untuk menggunakan Cloud SQL sebagai layanan yang terkelola sepenuhnya untuk database relasional Anda.


Layanan Non-Relational Database di GCP
Cloud Firestore adalah database NoSQL serverless yang terkelola sepenuhnya oleh Google Cloud yang dirancang untuk pengembangan aplikasi dalam skala global. Anda dapat menggunakannya untuk menyimpan, menyinkronkan, dan meminta data untuk aplikasi web, game, seluler, dan IoT (Internet of Things). 

Layanan ini memiliki berbagai fitur untuk dukungan offline mode, sinkronisasi secara langsung, dan keamanan. Anda dapat mengintegrasikan Firestore dengan Firebase, yakni platform pengembangan seluler GCP untuk pembuatan dan pengelolaan aplikasi yang lebih mudah.

Cloud Bigtable adalah layanan database NoSQL yang terkelola sepenuhnya oleh Google Cloud. Ia dirancang untuk beban kerja operasional dan analitik yang besar. Cloud Bigtable menyertakan fitur untuk ketersediaan tinggi, perubahan konfigurasi tanpa henti, dan latensi di bawah 10 ms. Anda dapat mengintegrasikannya dengan berbagai alat, termasuk Apache Hadoop, TensorFlow, dan BigQuery.

Cloud Bigtable adalah pilihan yang baik jika Anda menggunakan database dengan jenis non-relational database. Secara khusus, ini bagus untuk beban kerja latensi rendah dan throughput tinggi. 

Jika Anda perlu melakukan analisis di satu region, Cloud Bigtable lebih pas daripada Cloud Spanner. Namun, jika Anda memerlukan operasi multi-regional, Cloud Spanner adalah solusi yang disarankan. 

Cloud Memorystore adalah penyimpanan data Google Cloud dalam memori yang terkelola sepenuhnya. Ini dirancang agar aman, sangat tersedia, dan scalable. Cloud Memorystore memungkinkan Anda membuat cache aplikasi dengan latensi sub-milidetik untuk akses data. Ia kompatibel dengan Memcached dan Redis. 

Untuk kebutuhan yang lebih besar, seperti data analitik atau big data, tersedia juga layanan data warehouse, yakni BigQuery. 

BigQuery adalah gudang data tanpa server (serverless data warehouse) yang terkelola sepenuhnya. Ia dapat melakukan analisis data yang sangat besar menggunakan bahasa SQL dan dapat mengelola data streaming kueri. BigQuery mencakup layanan transfer data bawaan untuk membantu Anda memigrasikan data dari sumber daya lokal, termasuk Teradata. 

BigQuery memiliki berbagai fitur seperti database untuk machine learning, business intelligence, dan analisis data. Fitur-fitur ini disediakan melalui BigQuery ML dan BI Engine.

Jika Anda perlu menyimpan lebih dari 1 TB data terstruktur, membutuhkan volume tulis yang sangat tinggi, memerlukan latensi baca/tulis kurang dari 10 milidetik, atau memerlukan layanan penyimpanan yang kompatibel dengan beberapa aplikasi data processing, pertimbangkanlah untuk menggunakan Cloud Bigtable. 

Jika Anda tidak memerlukan semua kebutuhan di atas dan mencari layanan penyimpanan non relational database yang digunakan dengan baik untuk penggunaan mobile, game atau IoT pada skala regional, pertimbangkan untuk menggunakan Cloud Firestore. 



Security dan Compliance
Management Identitas dan Akses
Cloud Identity and Access Management (IAM) adalah sistem yang dibangun untuk mengelola hak akses pengguna dalam  sumber daya di GCP. Pengelolaan ini ditujukan untuk mengidentifikasi “siapa” yang dapat melakukan “apa” pada sumber daya “mana”.

Cloud IAM akan mengatur tiga komponen penting yakni:

Identity: Pengelolaan “siapa” dalam hal ini akun mana yang dapat mengelola sumber daya.
Role: Kumpulan hak akses (permission) yang bisa kita tetapkan (assign) pada sebuah akun.
Resource: Merujuk pada sumber daya yang bisa diatur berdasarkan role yang dimiliki oleh sebuah akun.
Komponen penting Cloud IAM terdiri dari berikut ini:

Roles (peran) mendefinisikan “siapa” yang dapat melakukan “apa” pada sumber daya yang ada pada lingkungan GCP. Terdapat tiga jenis roles di Cloud IAM yakni basic roles, predefined roles, dan custom roles.

Banyak perusahaan menggunakan prinsip least-privilege, di mana setiap orang dalam organisasi Anda diberikan hak akses seminimal mungkin yang diperlukan untuk melakukan pekerjaan mereka.

Penggunaan roles pada praktik terbaiknya adalah memberikan peran secara terperinci (fine-grained) sesuai dengan hak akses yang akan digunakan. Anda disarankan menggunakan predefined roles atau custom roles agar penetapan peran tidak terlalu luas seperti pada beberapa peran yang dimiliki oleh basic roles.

Members mempresentasikan akun pengguna dan memungkinkan kita untuk memberikan roles kepadanya.
Terdapat lima jenis members, yakni:

Google Accounts
Akun jenis ini merepresentasikan developer, administrator atau siapa pun orang yang berinteraksi di lingkungan Google Cloud menggunakan akun Google-nya. Setiap alamat email yang terasosiasi dengan akun Google bisa menjadi Identity (identitas).

Service Accounts
Service account adalah sebuah akun yang ditetapkan pada sebuah resource. Service account tidak memiliki password. Fungsi dari akun ini adalah untuk memberikan hak akses pada sebuah resource agar satu resource dapat mengakses resource lainnya, seperti interaksi antaraplikasi, layanan, ataupun mesin virtual.

Google Group
Google Group adalah cara pengelompokan berbagai akun yang terdiri dari kumpulan akun Google atau service account.

Google Workspace Domains
Google Workspace Domains adalah domain custom yang bisa Anda atur sebagai identitas email domain organisasi atau perusahaan dalam menggunakan berbagai layanan yang tersedia,seperti pengelolaan email organisasi, penyimpanan Google Drive, dan berbagai aplikasi produktivitas seperti Docs, Spreadsheet, ataupun Slides.

Cloud Identity Domains
Cloud Identity adalah solusi Identity as a Service (IDaaS) yang mengelola pengguna dan grup secara terpusat. Anda dapat mengonfigurasi Cloud Identity untuk menggabungkan identitas antara Google dan penyedia identitas lainnya, seperti Active Directory dan Azure Active Directory.

Permission, agar dapat mengakses dan mengelola berbagai resource di GCP, hal yang perlu kita miliki adalah permission atau perizinan. 

Policy, Cloud IAM memungkinkan Anda menetapkan kebijakan (policy) di semua level hierarki resources Google Cloud yang terdiri dari organization, folder, project dan resources. Di mana kebijakan berisi sekumpulan peran dan anggota di dalamnya. Sumber daya di GCP akan mewarisi policy dari induknya berdasarkan hierarki.


Enkripsi
Enkripsi (Encryption) adalah metode mengubah sebuah informasi atau data dari plaintext (teks biasa yang terbaca manusia) menjadi ciphertext (teks yang tidak bisa dibaca dan dimengerti manusia) menggunakan algoritma tertentu sehingga metode ini dapat mencegah pihak yang tidak berwenang mengetahui informasi yang Anda kirim, terima, ataupun simpan.

Dekripsi (Decryption) adalah metode yang mengubah informasi atau data dari ciphertext menjadi plaintext.

Dalam menutup maupun membuka informasi, kita membutuhkan kunci. Biasanya, terdapat dua sistem penguncian brankas ini, yakni:

Symmetric Cipher, yakni enkripsi yang menggunakan single key atau kunci yang sama. Sehingga client maupun server memiliki kunci yang sama untuk mengenkripsi dan mendekripsi informasi.
Asymmetric Cipher, yakni enkripsi yang menggunakan dua kunci yang berbeda terdiri dari private key dan public key dalam proses enkripsi dan dekripsinya.
Intinya, kita harus memiliki kunci (key) untuk mengamankan data dan melihat informasi kita.

Di bawah ini adalah ringkasan opsi enkripsi yang tersedia untuk Anda dengan studi kasus pada layanan Google Cloud Storage: 

Enkripsi sisi server (server-side encryption)
Saat Anda mengunggah data ke Cloud Storage, Google akan mengenkripsinya terlebih dahulu sebelum data tersebut ditulis ke disk. Mekanisme seperti ini membuat Google tidak bisa melihat isi konten dari data Anda. Inilah yang disebut sebagai enkripsi di sisi server atau server-side encryption.

Google Cloud menyediakan layanan tambahan untuk meningkatkan keamanan kunci enkripsi untuk berbagai layanan Anda. Beberapa diantaranya sebagai berikut:

Customer-supplied encryption keys (CSEK)
Kunci enkripsi yang disediakan oleh pelanggan. Anda dapat membuat dan mengelola kunci enkripsi secara mandiri. Kunci ini bertindak sebagai lapisan enkripsi tambahan di atas enkripsi standar dari Cloud Storage.

Customer-managed encryption keys (CMEK)
Pada mekanisme ini, Anda mengelola kunci enkripsi yang dibuat untuk Anda dan disimpan di Cloud Key Management Service.

Enkripsi sisi klien (client-side encryption)
Enkripsi yang terjadi sebelum data dikirim ke Cloud Storage. Jadi, data tersebut dienkripsi terlebih dahulu di sisi klien sebelum diunggah ke Cloud Storage. Data tersebut juga mengalami enkripsi tambahan karena adanya enkripsi di sisi server.

Google Cloud menawarkan solusi pengelolaan kunci enkripsi ini dengan berbagai pilihan yang dapat disesuaikan dengan kebutuhan Anda. Google Cloud memiliki layanan untuk untuk menyimpan dan mengelola encryption keys bernama Cloud Key Management Service (Cloud KMS).

Layanan Cloud Key Management Service memungkinkan Anda membuat, mengimpor, dan mengelola kunci kriptografi dan melakukan operasi kriptografi dalam satu layanan cloud terpusat. Anda dapat menggunakan kunci dan melakukan operasi kriptografi dengan menggunakan Cloud KMS secara langsung, atau dengan menggunakan integrasi Customer-Managed Encryption Keys (CMEK) dalam layanan Google Cloud lainnya.


Compliance
Compliance (kepatuhan) adalah sebuah upaya yang dilakukan oleh suatu usaha untuk memenuhi peraturan hukum (regulasi), prosedur, dan standar yang ada pada layanan yang disediakan ke masyarakat luas di suatu wilayah. 

Kepatuhan atas segala peraturan yang ada di wilayah berwenang di mana bisnis Anda berada itu sangat penting bagi sebuah bisnis karena

kepatuhan bersifat wajib sehingga harus dilakukan;
menunjukkan kredibilitas sebuah bisnis;
menciptakan kepercayaan kepada semua pemangku kepentingan; dan
membantu upaya pengelolaan risiko untuk bisnis Anda.
Berikut beberapa contoh compliance yang harus dipatuhi oleh berbagai pelaku bisnis, di antaranya:

General Data Protection Regulation (GDPR)
GDPR adalah peraturan yang mengatur perlindungan data pribadi pengguna yang ada di seluruh negara Uni Eropa (EU). Pelaku bisnis yang memiliki pengguna di wilayah EU tidak boleh semena-mena mengolah data dalam bentuk apa pun tanpa seizin pemegang regulasi (regulator).

Health Insurance Portability and Accountability Act (HIPAA)
Peraturan ini mewajibkan pelaku bisnis untuk melindungi informasi kesehatan pasien seperti nama, alamat, riwayat sakit, informasi pembayaran dan lain-lain yang tidak boleh dipublikasikan ke publik atau diakses oleh pihak yang tidak berwenang di negara Amerika Serikat (AS).

Payment Card Industry Data Security (PCI-DS)
Semua pihak baik pengguna maupun pelaku bisnis yang menyimpan, memproses, atau meneruskan data, termasuk lembaga keuangan, merchant, serta penyedia layanan wajib mematuhi Standar Keamanan Data Industri Kartu Pembayaran (Payment Card Industry Data Security).

Jika ingin melihat compliance lainnya, Anda bisa akses link berikut ini:

https://cloud.google.com/security/compliance.


Cost dan Billing

Pricing
kita harus memikirkan biaya seefektif mungkin di mana kita lah yang mengontrol pengeluaran dan pembelanjaan anggaran yang kita miliki.

Pricing model (model pembayaran) pada layanan Google Cloud menggunakan mekanisme pay-as-you-go atau tanpa uang muka. Jadi, Anda hanya membayar layanan yang telah digunakan. 

Secara default, biaya layanan di GCP dihitung per menit (per-minutes billing). 

Semakin lama Anda menggunakan layanannya, akan semakin hemat tagihan biaya yang akan ditagih oleh cloud provider. 

Untuk lebih menghemat pengeluaran, Google Cloud menawarkan produk free tier. Di mana Anda tidak dikenakan biaya untuk menggunakan beberapa produk yang ditawarkan. Namun, beberapa produk ini mempunyai batasan penggunaan atau quotas.

Anda juga dapat menggunakan free trial credit sebesar 300 dolar yang diberikan. Free trial credit hanya diberikan kepada pengguna akun GCP yang telah memenuhi syarat, seperti mendaftarkan akun free tier-nya menggunakan kartu kredit atau debit yang terverifikasi.

Selain itu, terdapat juga kesepakatan berdasarkan durasi agar pengguna mendapatkan diskon dengan menggunakan layanan pada jangka waktu tertentu secara terus-menerus. Misalnya, penggunaan yang berkelanjutan (sustained use discounts) atau berkomitmen menggunakan layanan pada periode tertentu seperti satu tahun atau tiga tahun (committed use discounts).


Free Trial Credit dan Free Tier 
Untuk mendapatkan free trial credit, Anda harus mendaftar akun Google Cloud menggunakan kartu kredit atau debit yang terverifikasi dan dapat digunakan untuk pembayaran internasional. 

Kartu kredit atau debit Anda akan terkena biaya setidaknya satu dolar untuk memverifikasi bahwa kartu Anda aktif dan dapat digunakan untuk pembayaran. 

Setelah itu, secara virtual Anda akan memiliki credit sebesar 300 dolar yang bisa digunakan untuk menggunakan berbagai layanan GCP selama 90 hari.

Anda benar-benar bisa menggunakan real cloud environment (lingkungan cloud yang nyata) dari GCP, bukan sekadar lingkungan simulasi. 

Selain free trial credit, Anda juga dapat menggunakan produk free tier yang ditawarkan oleh GCP. Lebih dari 20 produk gratis yang bisa Anda pakai, seperti Compute Engine, Cloud Storage, dan BigQuery. Namun, setiap penggunaan layanan tersebut memiliki batasan penggunaan masing-masing setiap bulannya. Bila penggunaan Anda melebihi batasan yang diberikan, Anda masih dapat menggunakannya dengan free trial credit. 

Dengan demikian, free trial credit akan berkurang otomatis ketika penggunaan layanan free tier-nya melebihi batasan yang telah diberikan.



Discounts
Penghematan biaya dalam penggunaan layanan di GCP juga dapat Anda lakukan menggunakan diskon yang melalui sebuah kesepakatan, seperti sustained use discounts (SUDs) ataupun committed use discounts (CUDs).

Sustained use discounts (SUDs) atau diskon penggunaan berkelanjutan adalah diskon otomatis yang diberikan secara spesifik ketika menjalankan sumber daya mesin komputasi tertentu secara terus-menerus pada periode tertentu.

Diskon ini berlaku ketika Anda memenuhi persyaratan penggunaan suatu resource pada jangka waktu tertentu. Misalnya, Anda telah menggunakan Compute Engine secara terus-menerus selama 7 hari atau selama sebulan, maka Anda akan mendapatkan diskon secara otomatis dari GCP.

Committed use discounts (CUDs) atau diskon penggunaan berkomitmen adalah diskon yang akan diberikan oleh GCP bila Anda menggunakan beberapa produk layanan pada jangka waktu satu atau tiga tahun secara terus-menerus.

Terdapat dua macam CUDs, yakni:

Spend-based 
Spend-based memberikan diskon kepada pengguna sebagai imbalan atas tercapainya minimal penggunaan suatu layanan pada setiap bulannya. Jadi, ketika penggunaan layanan berkomitmen untuk menggunakan sekian jam, GCP akan memberikan diskon spend-based kepada penggunanya.

Resource-based
CUD berbasis sumber daya (resource-based) memberikan diskon sebagai imbalan atas komitmen Anda untuk menjalankan sejumlah sumber daya secara terus-menerus setiap bulannya. Komitmen ini biasanya dihitung berdasarkan pemilihan di mana region sumber daya bekerja, seberapa banyak vCPU, memory, GPU, dan local SSD yang akan digunakan untuk jangka waktu yang panjang antara satu atau tiga tahun.


Billing Reports
Untuk mengetahui total tagihan di GCP, Anda bisa melihatnya di halaman Billing reports.

Di sini laporan pengeluaran biaya ditampilkan secara detail untuk berbagai layanan yang telah Anda gunakan. Alasan dan bagaimana biaya Anda dihabiskan untuk membayar berbagai layanan di GCP terangkum secara menarik menggunakan grafik pada fitur Billing Reports.


Cost breakdown report
Cost breakdown report akan menampilkan ringkasan seberapa banyak budget yang harus Anda keluarkan, jumlah diskon yang didapat, dan total biaya sebenarnya yang harus dibayarkan. 


Budgets dan Alerts
Agar pengeluaran dapat terkendali dengan baik hendaknya Anda menggunakan fitur Budgets & Alerts.

Fitur ini akan membantu Anda untuk mengendalikan biaya pengeluaran dengan menggunakan sistem budgeting (penganggaran). Dengan sistem seperti ini, Anda menetapkan batasan pengeluaran biaya yang dapat digunakan Anda dan tim di lingkungan GCP.

Terdapat fitur Alerts yang berguna untuk mengirim email berisi notifikasi peringatan jika budgets yang telah Anda alokasikan melewati batasan yang telah ditetapkan.


Quotas
Semua resource di GCP memiliki kuota penggunaan. Biasanya, kuota tersebut dibagi menjadi tiga kategori, yakni: 

Kuota sumber daya, yakni seberapa banyak sumber daya yang dapat Anda buat per project. Misalnya, Anda hanya dapat memiliki 5 jaringan VPC per project. 
Kuota akses. Seberapa cepat Anda dapat membuat permintaan API dalam suatu project. Misalnya, secara default, Anda hanya dapat membuat 5 tindakan per detik setiap project saat menggunakan Cloud Spanner API.
Kuota region. Misalnya, secara default, Anda hanya dapat memiliki 24 CPU setiap region.
Kuota project ini mencegah konsumsi yang tidak terkendali jika terjadi kesalahan atau serangan berbahaya. Misalnya, Anda secara tidak sengaja membuat 100 instances, bukan 10 instance Compute Engine menggunakan baris perintah gcloud. 



Meningkatkan Nilai Bisnis

Modernisasi Infrastruktur
Modernisasi infrastruktur adalah hal yang lumrah dilakukan oleh pelaku bisnis ketika kita ingin mengikuti perkembangan zaman dengan meng-update infrastruktur menggunakan teknologi terkini.

Sebagai salah satu contohnya, Compute Engine dengan fitur auto scaling di Managed Instance Group yang bisa secara otomatis menambahkan atau mengurangi instance yang dimiliki agar sesuai dengan permintaan traffic yang terjadi.

Ada beberapa istilah yang cukup populer di kalangan pebisnis ketika mengadopsi modernisasi teknologi menggunakan cloud. Berikut di antaranya:


Rehosting dan Replatforming
Rehosting
Rehosting adalah langkah modernisasi teknologi yang dilakukan oleh pelaku bisnis dengan memindahkan teknologi aplikasinya secara apa adanya ke lingkungan cloud. Teknik ini juga biasa dikenal dengan istilah lift and shift (angkat dan geser).

Biasanya, perusahaan yang melakukan rehosting ke GCP mengoptimalkan sebanyak mungkin layanan Infrastructure as a Service (IaaS) dan perlahan mulai menggunakan layanan yang lebih matang dan canggih seperti Platform as a Service (PaaS) atau Software as a Service (SaaS).


Replatforming
Replatforming merupakan langkah transformasi digital dari pelaku bisnis yang akan menggunakan teknologi cloud untuk memodernisasi infrastrukturnya dengan cara melakukan tuning (penyetelan) aplikasi yang telah ada agar dapat memanfaatkan produk yang tersedia di cloud secara optimal.

Sistem yang di replatforming akan memiliki kelebihan, yakni ia akan dapat bekerja secara berkelanjutan dan akan bekerja secara optimal bila dioptimasi.

Jika infrastruktur yang ada sudah bekerja dengan cukup baik, mungkin yang diperlukan hanyalah rehosting.

Organisasi yang memilih melakukan replatforming perlu mempertimbangkan tenaga tambahan untuk melatih karyawan mereka agar nyaman menggunakan teknologi berbasis cloud yang lebih baru seperti managed database ataupun serverless data warehouse.


Modernisasi Platform Bisnis
Modernisasi platform bisnis ini diperlukan untuk cost management yang lebih efektif karena penggunaan teknologi berbasis cloud ini akan lebih murah dan efektif daripada membeli dan mengonfigurasi sendiri berbagai kebutuhan infrastruktur, aplikasi, dan jaringannya.

Modernisasi ini dapat mengotomatiskan proses yang repetitif secara praktis dan pengelolaan komunikasi antaraplikasi menggunakan API yang bisa saja lintas cloud ataupun on-premise semakin mudah.

Sebagai contoh, layanan Apigee yang merupakan layanan yang digunakan untuk mengembangkan dan mengelola API. Bahkan, Anda dapat memonetisasi API sehingga ketika banyak orang atau perusahaan lain menggunakan API milik Anda, mereka harus membayar setiap kali menggunakan API tersebut.


Modernisasi Aplikasi
Memodernisasi legacy apps (aplikasi lama) ataupun membuat aplikasi baru di cloud sangatlah penting. Dengan begitu, ini akan membantu mencapai ROI (return on investment) yang lebih tinggi dan berinovasi lebih cepat.


Tantangan dan Solusi Modernisasi Aplikasi
Sebelum kita membahas bagaimana cara memodernisasi aplikasi, kita akan mengulas sedikit tantangan apa saja yang kita hadapi ketika memodernisasi sebuah aplikasi. 

Berikut beberapa tantangannya:

Aplikasi lama cenderung kompleks dan kaku
Acap kali kita menemui aplikasi berjalan dengan baik di lokal environment atau di on-premise server, tetapi ketika berpindah environment, aplikasi tidak berjalan dengan semestinya bahkan ujug-ujug mengalami eror yang tidak diketahui kenapa bisa terjadi.

Google Cloud menyarankan legacy app seperti itu ditampung dan diisolasi di suatu wadah bernama container. Pengembangan aplikasi menggunakan container ini akan mempercepat pengembangan aplikasi dan perpindahan environment menjadi lebih fleksibel.

Salah satu contoh layanan yang dapat Anda gunakan untuk itu ialah Google Kubernetes Engine (GKE) dan Cloud Run (serverless container deployment).

Monolith App vs Microservices
Ketika aplikasi menjadi sangat populer dan mengakibatkan lonjakan akses yang menyebabkan aplikasi terasa berat saat digunakan terutama pada proses pembayaran karena banyak pengguna yang melakukan pembayaran secara bersamaan.

Namun, karena kita masih menggunakan arsitektur monolith, kita harus membuat kembali atau meng-upgrade seluruh infrastruktur, seperti jumlah CPU, RAM, dsb. Hal ini tentunya sangat merepotkan dan memakan waktu yang lebih lama.

Oleh karena itu, arsitektur lain yang lebih fleksibel menjadi pilihan di era modern saat ini adalah arsitektur microservice.

Dengan microservice, aplikasi akan dipecah-pecah menjadi komponen-komponen independen yang menjalankan setiap fitur sebagai service (layanan) tersendiri. Setiap service mewakili fungsi tertentu dari suatu aplikasi, seperti fitur login, katalog, ataupun payment.

Jadi, ketika terjadi bottleneck (kemacetan) yang hanya terjadi di fitur tertentu contoh  di fitur pembayaran, kita hanya perlu melakukan scaling pada fitur pembayaran saja. Tidak perlu semua komponen aplikasi yang mendasarinya perlu di-upgrade.

Pemulihan dari downtime
Kita sebaiknya mereplikasi atau menempatkan aplikasi kita di beberapa zone dan region yang berbeda sehingga kegagalan sistem seperti ini dapat dihindari.

Google Cloud memiliki berbagai fitur untuk dapat mencegah hal tersebut terjadi. Misalnya seperti fitur replikasi yang dapat mereplikasi secara otomatis aplikasi yang telah dibuat dan menjalankannya di zona yang berbeda.



Pola Modernisasi Aplikasi
Lalu, bagaimana cara mengubah legacy app ataupun memodernisasi aplikasi berbasis cloud? Simak beberapa pattern atau pola pengembangan aplikasi berikut ini:

Move app without any change (lift and shift)
Ini merupakan langkah sederhana yang dapat dilakukan dengan mudah jika assessment (perakitan) yang kita lakukan sebelumnya dengan aplikasi yang ada sudah berjalan optimal. Dengan demikian, aplikasi tidak memerlukan banyak perubahan untuk dapat berjalan dengan baik di lingkungan cloud.

Move app first then change them (Improve and Move)
Ini berarti memindahkan aplikasi ke cloud, lalu mengoptimalkannya di lingkungan baru tersebut. Seiring berjalannya waktu, kita mengoptimasi aplikasi kita sedikit demi sedikit sehingga terintegrasi dengan layanan lain yang ada di cloud.

Change app before move (Rip and Replace)
Ini adalah pola pengembangan aplikasi di mana kita mengubah aplikasi kita sebelum bermigrasi agar dapat berjalan dengan baik di lingkungan cloud.


Fase Migrasi Aplikasi
Terdapat empat fase migrasi, yakni:

Assess 
Dalam fase ini, Anda melakukan penilaian secara menyeluruh terhadap lingkungan pengembangan yang ada untuk memahami beban kerja aplikasi seperti mengidentifikasi dependensi, persyaratan aplikasi, biaya, dan sebagainya.

Plan 
Pada fase ini Anda membuat perencanaan infrastruktur dasar di lingkungan cloud yang sekiranya sesuai dengan beban kerja dan menyusun langkah sesuai dengan praktik terbaik bagaimana memindahkan aplikasi ke cloud. Perencanaan ini mencakup manajemen identitas, organisasi dan struktur proyek, jaringan, serta pengembangan strategi migrasi.

Deploy 
Di sini Anda mulai mengimplementasikan migrasi aplikasi ke lingkungan cloud. Selama proses migrasi, Anda mungkin perlu memantau proses dengan saksama dan juga membuat rencana cadangan bila terjadi kegagalan selama migrasi berlangsung.

Optimize 
Terakhir, Anda mulai memanfaatkan sepenuhnya teknologi dan kemampuan berbagai layanan cloud sepenuhnya untuk memperluas potensi bisnis Anda ke hal-hal seperti kinerja, skalabilitas, pemulihan bencana, biaya, serta membuka jalan untuk mulai menerapkan pemelajaran mesin (machine learning) dan integrasi kecerdasan buatan (artificial intelligence) untuk aplikasi Anda.



Solusi Storage dan Database
Perusahaan bisa memigrasikan dan mengelola data perusahaan dengan memperhatikan berbagai aspek seperti high availability, reliability, ataupun scalability.


Availability, Reliability, dan Scalability


High Availability (ketersediaan tinggi)
Ketersediaan yang tinggi erat kaitannya dengan persentase uptime (waktu aktif) yang menunjukkan jaminan ketersediaan suatu layanan dapat diakses pada periode tertentu. Misalnya, aplikasi yang mempunyai uptime hingga 99.99% berarti aplikasi tersebut kemungkinan hanya memiliki downtime 9 detik setiap harinya.

Reliability (keandalan)
Sistem tidak akan bisa 100% andal tanpa ada masalah. Di dunia nyata, semuanya suatu saat akan memiliki kesalahan, baik itu downtime server, kegagalan perangkat lunak, pelanggaran keamanan, kesalahan pengguna, maupun insiden tak terduga lainnya.

Setidaknya, kita memiliki pendekatan pengembangan aplikasi yang dapat meminimalisir kesalahan sehingga memenuhi aspek keandalan, contohnya menggunakan layanan yang sepenuhnya dikelola oleh cloud provider (fully managed) atau memiliki jaminan keandalan skala global seperti Cloud Spanner.

Scalability (skalabilitas)
Skalabilitas adalah ukuran kemampuan sistem untuk menangani beban kerja (workload) dengan menambahkan atau mengurangi sumber daya dari sistem. Misalnya, aplikasi web yang scalable adalah aplikasi yang bekerja dengan baik menangani kenaikan dan penurunan penggunaan aplikasi.

Dengan adanya teknologi fully managed (layanan yang sepenuhnya dikelola oleh cloud provider) dan serverless service (layanan nirserver) seperti App Engine, penyesuaian beban kerja pada layanan ini terjadi secara spontan nan mulus sehingga dapat dengan mudah menangani lonjakan penggunaan aplikasi.



Analisis Cerdas
Dengan adanya analisis data yang cerdas, suatu perusahaan bisa menghasilkan insight (wawasan) yang instan dari data yang mereka kumpulkan pada skala petabyte sekalipun menggunakan platform analitik fully managed dan serverless yang ditawarkan di lingkungan cloud.

Contoh service yang ada di GCP adalah BigQuery (layanan data warehouse serverless terdepan dalam industri).

BigQuery dapat digunakan untuk mengolah data yang Anda miliki dan mencari wawasan baru. Bahkan, layanan ini juga memungkinkan Anda untuk membuat sistem yang memanfaatkan machine learning yang dibuat sedemikian rupa sehingga dapat mendeteksi preferensi pengguna berdasarkan data yang telah dikumpulkan.


Kecerdasan Buatan
Jika ingin meningkatkan nilai bisnis dan memaksimalkan potensi bisnis Anda, maka Anda harus memiliki prediksi akurat mengenai tren yang akan datang. Sehingga dibutuhkan sistem prediksi yang canggih yang dapat membantu Anda mengambil keputusan tepat untuk arah bisnis ke depannya.

Anda bisa menggunakan BigQuery ML untuk mengidentifikasi tren yang akan datang atau Dialogflow yang digunakan untuk chatbot.


Keamanan
Di cloud, praktik terbaik keamanan yang ditekankan adalah Shared Responsibility Model (model keamanan tanggung jawab bersama).

Komitmen Google Cloud untuk membantu Anda menjaga keamanan dan privasi data Anda adalah sebagai berikut: 

Anda adalah pemilik data Anda, bukan Google. Itu berarti bahwa data Anda adalah data Anda, titik. 
Google tidak menjual data pelanggan kepada pihak ketiga dan Google tidak menggunakan data Anda untuk tujuan periklanan. 
Google Cloud hanya memproses data pelanggan sesuai dengan instruksi spesifik yang diterimanya. 
Semua data pelanggan dienkripsi secara default. Google Cloud adalah penyedia cloud pertama yang mengenkripsi semua data pelanggan saat nonaktif secara default tanpa pelanggan perlu melakukan apa pun. 
Google Cloud menjamin bahwa hanya yang berwenanglah yang dapat mengakses data pelanggan dengan izin yang telah diberikan atau dalam skenario yang sangat spesifik dengan instruksi khusus. 
Google tidak pernah memberikan akses ke entitas pemerintahan dan/atau permintaan akses yang melanggar hukum. Terutama, Google menolak permintaan pemerintah yang tidak valid dan secara teratur menerbitkan laporan transparansi yang rinci bila ada permintaan akses dari pemerintah.
Praktik privasi Google diaudit secara berkala berdasarkan standar internasional. Seperti ISO 27-0-17 yang mencakup perlindungan informasi pengenal pribadi dalam layanan cloud.

Tantangan Keamanan Siber 
Phishing
Penyerang mengumpulkan informasi tentang Anda atau siapa pun di organisasi Anda, misalnya karyawan atau siswa. Mereka kemudian membuat email yang sangat spesifik dan tertarget untuk mengelabui orang-orang ini agar berpikir bahwa pesan itu asli.

Kerusakan fisik
Ini berarti bahwa organisasi tetap dapat bertanggung jawab atas kehilangan data meskipun terjadi kerusakan pada perangkat keras fisik, misalnya kehilangan daya atau bencana alam seperti banjir, kebakaran, dan gempa bumi.

Untuk mencegah hal seperti ini terjadi, maka suatu organisasi wajib memikirkan keamanan infrastrukturnya agar data tidak hilang seketika bila bencana alam terjadi seperti adanya mekanisme cadangan untuk pemulihan bencana (disaster recovery).

Serangan malware, virus, dan ransomware
Data dapat hilang, rusak, atau dihancurkan oleh virus atau malware. Misalnya, penyerang bisa saja menghilangkan kumpulan data pengguna melalui ransomware (malware yang dapat mengenkripsi seluruh file yang ada pada suatu sistem) sampai jumlah tebusan dibayarkan.

Sistem pihak ketiga yang tidak aman
Meskipun sistem pihak ketiga sering digunakan untuk memenuhi kebutuhan bisnis umum seperti keuangan, inventaris, atau manajemen akun. Tanpa langkah-langkah keamanan yang memadai dan pemeriksaan rutin, sistem ini dapat menimbulkan ancaman bagi keamanan data.

Kurangnya pengetahuan ahli
Tingkat perubahan teknologi yang masif dan begitu pesat ini, membuat berinvestasi pada ahli yang memiliki kemahiran yang tepat untuk menilai, mengembangkan, menerapkan, dan memelihara rencana keamanan data sangatlah penting bagi bisnis untuk tetap menjadi yang terdepan dalam mencegah potensi ancaman keamanan data.

Pendekatan kolaboratif seperti shared responsibility model dengan penyedia cloud sangat penting untuk menjaga keamanan data organisasi Anda.

Intinya, Google Cloud Platform membantu Anda untuk mengamankan aplikasi bisnis dengan mudah menggunakan arsitektur bawaaan Google Cloud, seperti hierarki sumber daya, encryption at rest (enkripsi bawaan ketika menyimpan data), dan adanya cloud IAM dengan mengikuti kaidah least privilege dan shared responsibility yang mampu mengelola hak akses secara spesifik dan terstruktur. Tak hanya itu, bila diperlukan untuk menambah lapisan keamanan tambahan, Anda dapat menggunakan Key Management Service (KMS) untuk menambah tingkat keamanan dari aplikasi Anda.

Google Cloud memberikan dokumentasi yang dapat mengidentifikasi di mana sebenarnya posisi perusahaan Anda sebagai langkah awal dalam bermigrasi ke cloud. Dokumentasi tersebut bernama Google Cloud Adoption Framework.

Lihat detail lebih lanjut ke situs web berikut:

https://cloud.google.com/adoption-framework.