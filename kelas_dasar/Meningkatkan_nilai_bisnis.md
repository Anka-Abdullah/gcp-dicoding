# Rehosting
memindahkan teknologi aplikasinya secara apa adanya ke lingkungan cloud

 (migrasi) VM ke lingkungan cloud menggunakan layanan Compute Engine.

 layanan manajemen API yang ditawarkan oleh Google Cloud seperti Apigee, API Management, dan Cloud Endpoints

- _Apigee_ yang merupakan layanan yang digunakan untuk mengembangkan dan mengelola API, Bahkan, Anda dapat memonetisasi API sehingga ketika banyak orang atau perusahaan lain menggunakan API milik Anda, mereka harus membayar setiap kali menggunakan API tersebut.

# Tantangan dan Solusi Modernisasi Aplikasi

1. Aplikasi lama cenderung kompleks dan kaku.
    Google Cloud menyarankan legacy app seperti itu ditampung dan diisolasi di suatu wadah bernama container. Salah satu contoh layanan yang dapat Anda gunakan untuk itu ialah Google Kubernetes Engine (GKE) dan Cloud Run (serverless container deployment).

2. Monolith App vs Microservices
    Dengan microservice, aplikasi akan dipecah-pecah menjadi komponen-komponen independen yang menjalankan setiap fitur sebagai service (layanan) tersendiri. Setiap service mewakili fungsi tertentu dari suatu aplikasi, seperti fitur login, katalog, ataupun payment.

    Jadi, ketika terjadi bottleneck (kemacetan) yang hanya terjadi di fitur tertentu contoh di fitur pembayaran, kita hanya perlu melakukan scaling pada fitur pembayaran saja. 

3. Pemulihan dari downtime
    kerentanan single point of failure. Apa itu? Maksudnya adalah sistem tidak berjalan jika sistem inti mengalami kegagalan.
    Untuk menangani hal semacam ini, kita sebaiknya mereplikasi atau menempatkan aplikasi kita di beberapa zone dan region yang berbeda sehingga kegagalan sistem seperti ini dapat dihindari.

    Google Cloud memiliki berbagai fitur untuk dapat mencegah hal tersebut terjadi. Misalnya seperti fitur replikasi yang dapat mereplikasi secara otomatis aplikasi yang telah dibuat dan menjalankannya di zona yang berbeda.

# Pola Modernisasi Aplikasi
1. Move app without any change (lift and shift)
2. Move app first then change them (Improve and Move)
3. Change app before move (Rip and Replace)

- Invent in Greenfield :
    Aplikasi dibuat ulang dari awal. Mulai dari data, sistem operasi, aplikasi, dan semua fiturnya dibangun ulang dari awal dan sangat memperhatikan dependency atau library yang di-support layanan di lingkungan cloud.
    
    _kelebihan_ : 
    + Kostumisasi lebih luas
    + Skalabilitas lebih praktis
    + Kompatibilitas yang terjamin
    + Bebas berinovasi
    + Terintegrasi secara optimal 

    _Kekuarangan_ : 
    - Membutuhkan waktu untuk mempelajari teknologi baru
    - Berefek ke seluruh organisasi
    - Lebih mahal

- Invent in Brownfield : 
    Mengoptimalkan aplikasi yang telah dibuat, lalu dipindahkan ke lingkungan cloud. Seiring berjalannya waktu, sedikit demi sedikit mengoptimasi teknologi yang ada agar bekerja secara optimal. Namun, ini bukan pekerjaan yang mudah karena aplikasi yang telah dibangun biasanya memiliki masalah kompatibilitas dengan produk layanan di cloud.
     _kelebihan_ : 
     + Lebih familier
     + Terjangkau
     + Simpel

    _Kekuarangan_ : 
    - Keterbatasan dari aplikasi yang lama
    - Tidak fleksibel

# Fase Migrasi Aplikasi
1. Asses
    Anda melakukan penilaian secara menyeluruh. seperti mengidentifikasi dependensi, persyaratan aplikasi, biaya.

2. Plan
    perencanaan infrastruktur dasar di lingkungan cloud.
    Perencanaan ini mencakup manajemen identitas, organisasi dan struktur proyek, jaringan, serta pengembangan strategi migrasi.

3. Deploy
    Terakhir, Anda mulai memanfaatkan sepenuhnya teknologi dan kemampuan berbagai layanan cloud sepenuhnya untuk memperluas potensi bisnis Anda ke hal-hal seperti kinerja, skalabilitas, pemulihan bencana, biaya, serta membuka jalan untuk mulai menerapkan pemelajaran mesin (machine learning) dan integrasi kecerdasan buatan (artificial intelligence) untuk aplikasi Anda.

# Solusi Storage dan Database

 _High Availability (ketersediaan tinggi)_
Suatu aplikasi sebaiknya memenuhi metrik High Availability karena ini menjadi jaminan kualitas produk aplikasi yang mampu memberikan pengalaman penggunaan aplikasi yang selalu aktif dan konsisten dari waktu ke waktu.
Ketersediaan yang tinggi erat kaitannya dengan persentase uptime (waktu aktif) yang menunjukkan jaminan ketersediaan suatu layanan dapat diakses pada periode tertentu. Misalnya, aplikasi yang mempunyai uptime hingga 99.99% berarti aplikasi tersebut kemungkinan hanya memiliki downtime 9 detik setiap harinya.

Seperti halnya pada layanan Google Cloud Storage (GCS). GCS memiliki beberapa pilihan supaya storage yang kita miliki memenuhi aspek high availability. Bagaimana caranya?

Kita bisa menggunakan class storage standard, lalu memilih multi-region atau dual-region yang memiliki uptime hingga 99.95% untuk ketersediaan storage-nya. Dengan begitu, storage akan tersedia di berbagai belahan dunia. Proses aksesnya pun semakin cepat karena letak storage yang diakses akan menyesuaikan di mana wilayah pengguna berada.

_Reliability (keandalan)_
contohnya menggunakan layanan yang fully managed atau memiliki jaminan keandalan skala global seperti Cloud Spanner.
Salah satu layanan relational database ini sangat andal untuk mengelola database transaksional, seperti transaksi perbankan yang beban kerjanya sangat tinggi dan cakupannya bisa global. Layanan ini termasuk ke dalam layanan yang fully managed di mana jaminan keandalannya digaransi oleh Google sehingga Anda tidak perlu pusing bagaimana cara membuat sistem transaksi yang dapat memenuhi aspek reliabilitas.

_Scalability (skalabilitas)_
Skalabilitas adalah ukuran kemampuan sistem untuk menangani beban kerja (workload) dengan menambahkan atau mengurangi sumber daya dari sistem.
 Dengan desain yang tepat, Anda dapat menambah dan mengurangi sumber daya sesuai permintaan tanpa mengorbankan kinerja atau pengalaman pengguna tanpa gangguan.
Misalnya, layanan App Engine yang secara otomatis dapat menyesuaikan sumber daya yang dibutuhkan untuk dapat memenuhi beban kerja pada aplikasi yang Anda miliki. Dengan adanya teknologi fully managed (layanan yang sepenuhnya dikelola oleh cloud provider) dan serverless service (layanan nirserver), penyesuaian beban kerja pada layanan ini terjadi secara spontan nan mulus sehingga dapat dengan mudah menangani lonjakan penggunaan aplikasi.

# Analisis Cerdas
Contoh service yang ada di GCP adalah BigQuery (layanan data warehouse serverless terdepan dalam industri).

BigQuery dapat digunakan untuk mengolah data yang Anda miliki dan mencari wawasan baru. Bahkan, layanan ini juga memungkinkan Anda untuk membuat sistem yang memanfaatkan machine learning yang dibuat sedemikian rupa sehingga dapat mendeteksi preferensi pengguna berdasarkan data yang telah dikumpulkan. 

# Artificial Intelligence (AI)
Anda bisa menggunakan BigQuery ML untuk mengidentifikasi tren yang akan datang. Contohnya, kecenderungan pengguna memesan pizza pepperoni pada hari Sabtu membuat Anda memberikan diskon pada periode tersebut.
Contoh lainnya seperti chatbot 
Anda bisa memanfaatkan layanan kecerdasan buatan milik Google Cloud seperti Dialogflow yang dapat membuat percakapan buatan guna membantu pengguna ketika mengalami masalah yang sering terjadi. Sehingga, Anda tidak perlu menjawab pertanyaan umum yang sering ditanyakan oleh pengguna. 

# Security
komitmen Google Cloud untuk membantu Anda menjaga keamanan dan privasi data Anda adalah sebagai berikut: 

1. Anda adalah pemilik data Anda, bukan Google. Itu berarti bahwa data Anda adalah data Anda, titik. 

2. Google tidak menjual data pelanggan kepada pihak ketiga dan Google tidak menggunakan data Anda untuk tujuan periklanan. 

3. Google Cloud hanya memproses data pelanggan sesuai dengan instruksi spesifik yang diterimanya. 

4. Semua data pelanggan dienkripsi secara default. Google Cloud adalah penyedia cloud pertama yang mengenkripsi semua data pelanggan saat nonaktif secara default tanpa pelanggan perlu melakukan apa pun. 

5. Google Cloud menjamin bahwa hanya yang berwenanglah yang dapat mengakses data pelanggan dengan izin yang telah diberikan atau dalam skenario yang sangat spesifik dengan instruksi khusus. 

6. Google tidak pernah memberikan akses ke entitas pemerintahan dan/atau permintaan akses yang melanggar hukum. Terutama, Google menolak permintaan pemerintah yang tidak valid dan secara teratur menerbitkan laporan transparansi yang rinci bila ada permintaan akses dari pemerintah.

7. Praktik privasi Google diaudit secara berkala berdasarkan standar internasional. Seperti ISO 27-0-17 yang mencakup perlindungan informasi pengenal pribadi dalam layanan cloud. 

# Tantangan Keamanan
faktor-faktor yang dapat menjadi berbagai masalah dan celah keamanan (umum) : 

1. Phising
Penyerang mengumpulkan informasi tentang Anda atau siapa pun di organisasi Anda, misalnya karyawan atau siswa. Mereka kemudian membuat email yang sangat spesifik dan tertarget untuk mengelabui orang-orang ini agar berpikir bahwa pesan itu asli.

2. Kerusakan fisik
Ini berarti bahwa organisasi tetap dapat bertanggung jawab atas kehilangan data meskipun terjadi kerusakan pada perangkat keras fisik, misalnya kehilangan daya atau bencana alam seperti banjir, kebakaran, dan gempa bumi.

3. Serangan malware, virus, dan ransomware

4. Sistem pihak ketiga yang tidak aman

5. Kurangnya pengetahuan ahli

Google Cloud Platform membantu Anda untuk mengamankan aplikasi bisnis dengan mudahnya menggunakan arsitektur bawaaan Google Cloud, seperti hierarki sumber daya, encryption at rest (enkripsi bawaan ketika menyimpan data), dan adanya cloud IAM dengan mengikuti kaidah least privilege dan shared responsibility yang mampu mengelola hak akses secara spesifik dan terstruktur. 

Anda dapat menggunakan Key Management Service (KMS) untuk menambah tingkat keamanan dari aplikasi Anda. 

dokumentasi yang dapat mengidentifikasi di mana sebenarnya posisi perusahaan Anda _Google Cloud Adoption Framework_
https://cloud.google.com/adoption-framework.

# Rangkuman Meningkatkan Nilai Bisnis

Modernisasi Infrastruktur
Modernisasi infrastruktur adalah hal yang lumrah dilakukan oleh pelaku bisnis ketika kita ingin mengikuti perkembangan zaman dengan meng-update infrastruktur menggunakan teknologi terkini.

Sebagai salah satu contohnya, Compute Engine dengan fitur auto scaling di Managed Instance Group yang bisa secara otomatis menambahkan atau mengurangi instance yang dimiliki agar sesuai dengan permintaan traffic yang terjadi.

Ada beberapa istilah yang cukup populer di kalangan pebisnis ketika mengadopsi modernisasi teknologi menggunakan cloud. Berikut di antaranya:


Rehosting dan Replatforming
Rehosting
Rehosting adalah langkah modernisasi teknologi yang dilakukan oleh pelaku bisnis dengan memindahkan teknologi aplikasinya secara apa adanya ke lingkungan cloud. Teknik ini juga biasa dikenal dengan istilah lift and shift (angkat dan geser).

Biasanya, perusahaan yang melakukan rehosting ke GCP mengoptimalkan sebanyak mungkin layanan Infrastructure as a Service (IaaS) dan perlahan mulai menggunakan layanan yang lebih matang dan canggih seperti Platform as a Service (PaaS) atau Software as a Service (SaaS).


Replatforming
Re-platforming merupakan langkah transformasi digital dari pelaku bisnis yang akan menggunakan teknologi cloud untuk memodernisasi infrastrukturnya dengan cara melakukan tuning (penyetelan) aplikasi yang telah ada agar dapat memanfaatkan produk yang tersedia di cloud secara optimal.

Sistem yang di re-platforming akan memiliki kelebihan, yakni ia akan dapat bekerja secara berkelanjutan dan akan bekerja secara optimal bila dioptimasi.

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

Jadi, ketika terjadi bottleneck (kemacetan) yang hanya terjadi di fitur tertentu contoh di fitur pembayaran, kita hanya perlu melakukan scaling pada fitur pembayaran saja. Tidak perlu semua komponen aplikasi yang mendasarinya perlu di-upgrade.


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

Setidaknya, kita memiliki pendekatan pengembangan aplikasi yang dapat meminimalisir kesalahan sehingga memenuhi aspek keandalan, contohnya menggunakan layanan yang fully managed atau memiliki jaminan keandalan skala global seperti Cloud Spanner.

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