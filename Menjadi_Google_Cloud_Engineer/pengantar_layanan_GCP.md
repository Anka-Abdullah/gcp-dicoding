1. Google Cloud Storage: Layanan penyimpanan object dengan ketersediaan tinggi, memiliki API, latensi, dan kecepatan yang konsisten di seluruh kelas penyimpanan.

2. Cloud Persistent Disk: Layanan penyimpanan block dengan performa tinggi yang cocok untuk mesin virtual dan penyimpanan container. Persistent Disk memiliki fungsi yang mirip dengan disk yang dipasang pada sebuah komputer (HDD / SSD).

3. Cloud SQL: Layanan database relasional yang memberikan kemudahan dalam mengatur, memelihara, dan mengelola database MySQL dan PostgreSQL. Cloud SQL menawarkan kinerja, skalabilitas, dan kenyamanan yang tinggi.

4. Cloud Spanner: Layanan database relasional yang sepenuhnya dibangun untuk konsistensi transaksional, ketersediaan tinggi, dan berskala global.

5. Cloud Firestore: Layanan database NoSQL yang menyederhanakan penyimpanan, sinkronisasi, dan permintaan data untuk aplikasi mobile, web, dan IoT dalam skala global.

6. Cloud Datastore: Layanan database NoSQL yang fleksibel dan berorientasi dokumen. Datastore dikelola sepenuhnya oleh Google sehingga Anda tidak perlu memperbarui, melakukan konfigurasi, dan mengelola solusi database.

# layanan untuk big data dan data analytics, di antara lain:
1. Cloud Bigtable: Layanan database NoSQL berskala besar yang sesuai untuk latensi rendah dan throughput yang tinggi. Cloud Bigtable terintegrasi dengan big data tools populer seperti Hadoop dan Spark. Bigtable juga memberikan dukungan open source industry-standard HBase API.

2. Cloud BigQuery: Data warehouse yang sepenuhnya dikelola oleh Google, memiliki biaya yang rendah, dan memiliki kemampuan scaling menyesuaikan kebutuhan daya penyimpanan dan komputasi.

3. Cloud Pub/Sub: Layanan stream analytics dan event-driven computing systems. Anda dapat mengirim dan menerima pesan antar aplikasi dan data sindikasi di seluruh project dan aplikasi yang berjalan di cloud, lokal, atau lingkungan hybrid.

4. Cloud Dataproc: Layanan cloud yang cepat dan mudah untuk menjalankan cluster Apache Spark dan Apache Hadoop dengan cara yang lebih sederhana dan hemat biaya. Operasi yang biasanya memakan waktu berjam-jam atau berhari-hari, kini hanya membutuhkan beberapa detik atau menit dengan Dataproc.

5. Cloud Dataflow: Layanan Google Cloud untuk menjalankan Apache Beam, framework yang digunakan untuk data processing dalam bentuk stream (real time) dan batch (historical).

# Google Cloud Storage (GCS)
Untuk menyimpan berkas ke dalam GCS kita perlu terlebih dulu membuat bucket alias wadah penyimpan data kita. Bucket harus memiliki nama yang bersifat unik secara global. Ketika membuat bucket, kita perlu menentukan kelas penyimpanan. Kelas penyimpanan yang bisa digunakan antara lain:
1. _Standard_. Jenis penyimpanan untuk data yang sering diakses dan/atau disimpan hanya untuk periode waktu yang singkat.

2. _Nearline_. Jenis penyimpanan untuk data yang jarang diakses. Ini cocok untuk menyimpan data backup yang diakses kurang dari satu bulan sekali karena memiliki biaya penyimpanan yang rendah dan memerlukan biaya akses.

3. _Coldline_. Jenis penyimpanan untuk data yang sangat jarang diakses. Ini cocok untuk menyimpan data backup yang hanya diakses sekali per kuarter karena memiliki biaya penyimpanan yang rendah dan biaya akses yang lebih tinggi dari nearline.

4. _Archive_. Jenis penyimpanan berbiaya rendah untuk pengarsipan data atau backup yang hanya diakses setahun sekali. Tidak seperti layanan penyimpanan arsip yang ditawarkan oleh cloud provider lainnya, data Anda akan tersedia dalam hitungan milidetik, bukan jam atau hari.

object pada GCS memiliki 2 komponen
- object data : konten dari berkas otou sendiri
- objectmetadata : kumpulan pasangan name-value yang menggambarkan kualitas object.
satu object memiliki ukuran maksimum hingga 5 TB.

_Object versioning_
Ketika versioning diaktifkan lalu kita memperbarui sebuah berkas, berkas tersebut tidak akan dihapus dan digantikan dengan berkas yang baru.Namun, berkas sebelumnya akan diarsipkan dan versi terbarunya akan menjadi versi yang live.

_Lifecycle Management_

GCS mendukung lifecycle management yang memungkinkan data diturunkan dari multi-regional atau regional menjadi nearline atau coldline untuk mengurangi biaya penyimpanan. Selain mengubah kelas penyimpanan, kita juga bisa menggunakan lifecycle management untuk menghapus objek.

Ada beberapa kondisi yang mendukung operasi lifecycle management: 

- Age: Usia disimpannya suatu objek di dalam storage yang dihitung dalam satuan hari.

- CreatedBefore: Kondisi sebuah objek telah disimpan atau dibuat sebelum waktu yang ditentukan.

- IsLive: Jika kondisi ini bernilai true, maka kondisi ini berlaku untuk semua objek yang sedang live. Jika false, maka yang termasuk dalam kondisi ini adalah objek yang sudah diarsipkan.

- MatchesStorageClass: Kondisi ini terpenuhi ketika objek di dalam bucket disimpan di dalam kelas penyimpanan yang ditentukan.

- NumberOfNewerVersions: Kondisi ini hanya berlaku ketika versioning aktif. Pada kondisi ini, kita menentukan jumlah versi terbaru. Sebagai contoh kita menentukan 2, ketika sebuah objek telah mengalami 2 kali update versi, maka objek lama ini telah memenuhi kondisi untuk lifecycle management.

_Pricing_
Tarif layanan pada GCS ditentukan berdasarkan lokasi penyimpanan, kelas penyimpanan, total penyimpanan yang digunakan (dihitung dalam GB), dan biaya akses untuk kelas nearline dan coldline.


<!--  -->
Untuk berinteraksi dan melakukan operasi pada Google Cloud Storage melalui command-line tool, kita perlu menggunakan perintah gsutil yang ada di Cloud SDK. Untungnya, Cloud SDK secara bawaan sudah terpasang di Cloud Shell. Jadi, kita akan melakukannya melalui Cloud Shell.
<!--  -->

make bucket
gsutil mb -l asia-southeast2 gs://emberdata

# Cloud Persistent Disk
ayanan penyimpanan block dengan performa tinggi dan tahan lama untuk Google Cloud Platform.
fitur dan kelebihan : 
- Durable
Cloud Persistent Disk dirancang untuk daya tahan yang tinggi. Data akan disimpan secara berulang (redundant) untuk memastikan integritas 
- data.
Independent Volumes
Penyimpanan terletak secara independen dari mesin virtual. Ini memungkinkan Anda melepaskan atau memindahkan disk untuk menyimpan data bahkan setelah Anda menghapus mesin virtual Anda.

- Volume Size
Setiap persistent disk dapat memiliki ukuran hingga 64 TB, sehingga Anda tidak perlu mengelola beberapa disk untuk membuat volume penyimpanan yang besar.

- Online Resize
Memungkinkan penambahan volume sesuai dengan permintaan tanpa perlu me-restart mesin virtual atau memasang ulang disk.

Meskipun sebuah VM memiliki penyimpanan lokal tersendiri, data yang disimpan pada disk tersebut akan hilang ketika VM-nya dihapus. Sedangkan, data yang disimpan di dalam persistent disk akan tetap ada meski VM dimatikan atau dihapus. Persistent disk merupakan sumber daya yang independen karena tidak terpengaruh dengan VM, bahkan bisa digunakan di beberapa VM secara bergantian.

dua jenis konfigurasi yang bisa digunakan pada persistent disk, yaitu solid-state drive (SSD) dan hard disk drive (HDD).

Persistent Disk bersifat regional atau zonal, artinya persistent dapat dipindah dan digunakan di banyak VM selama masih berada dalam regional atau zone yang sama dengan konfigurasinya. Jika kita membutuhkan persistent disk dengan ketersediaan tinggi dan bisa digunakan di beberapa zone, maka kita perlu membuat regional persistent disk. Sedangkan jika persistent disk cukup digunakan hanya di satu zone saja, maka membuat zonal disk adalah pilihan yang baik karena lebih murah.

_Pricing_
tagihan persistent disk dihitung dari jumlah penyimpan yang kita sediakan dan dihitung per-GB. 

# Coud SQL
Cloud SQL adalah layanan basis data relasional dari Google Cloud Platform, Cloud SQL mendukung beberapa database engine ternama, yaitu MySQL, SQL Server, dan PostgreSQL.

_Konsep Cloud SQL_ :
- tabel
- coloumn
- Row
- key
    Ada 2 jenis key yang umum digunakan yaitu Primary Key (PK) dan Foreign Key (FK). Primary Key haruslah unik karena merupakan identitas utama pada sebuah baris data. PK yang menjadi atribut pada tabel lain menjadi Foreign Key dari tabel tersebut.

_Cloud SQL Instances_
cloud SQL instance adalah instance mesin virtual pada Google Compute Engine yang sudah terpasang database engine. 

_Pricing_
terdapat 3 item yang menjadi parameter perhitungan biaya, yaitu instance yang digunakan, jenis penyimpanan, dan jaringan.

# Cloud Spanner
_“the first horizontally scalable, strongly consistent, relational database.”_
cloud Spanner merupakan jawaban bagi Anda yang membutuhkan penyimpanan data terstruktur dengan data yang konsisten dan fitur query seperti database relasional pada umumnya, namun juga membutuhkan skalabilitas secara horizontal yang ditawarkan database non-relasional untuk mengatasi beban kerja yang tinggi.

# _Cloud Spanner Instance_
Instance dari Cloud Spanner berperan sebagai sebuah tempat yang bisa menyimpan beberapa database di dalamnya. Tidak seperti instance Cloud SQL yang disimpan secara zonal, Cloud Spanner disimpan secara regional atau multi-regional. Data pada Cloud Spanner ini akan direplikasi secara otomatis ke dalam masing-masing zone.
Setiap Spanner instance juga memiliki nodes. Nodes ini memiliki fungsi untuk mengelola data yang disimpan di dalam instance, nodes juga bertanggung jawab dalam menjalankan query. Google Cloud sendiri menyarankan setiap instance memiliki minimal 3 buah nodes untuk lingkungan production. Karena setiap node memiliki data hasil replikasi, maka data pada Cloud Spanner bisa dipastikan aman ketika terjadi masalah.

# _Database_
Secara umum, konfigurasi database pada Cloud Spanner tidak jauh berbeda dengan Cloud SQL, bedanya pada Cloud Spanner kita bisa membuat database dan menjalankan query langsung melalui halaman console pada web browser.

_Pricing_
1. Jumlah nodes yang digunakan. Setiap jam, Spanner akan menghitung jumlah nodes yang ada dan digunakan di dalam instance, tagihan akan dihitung per jam.
2. Jumlah penyimpanan yang digunakan.Tagihan penyimpanan akan dihitung sesuai dengan rata-rata penyimpanan yang digunakan setiap bulannya. Perhitungan ini dilakukan dalam satuan GB.
3. Jumlah network bandwidth yang digunakan. Lalu lintas jaringan keluar dari Spanner juga akan dikenakan biaya, misalnya ada aplikasi yang mengakses data dari database Spanner, maka akan dikenakan tagihan sesuai bandwidth yang digunakan

# Cloud Datastore
database NoSQL dari Google Cloud yang memiliki performa tinggi, automatic scaling.
ocok digunakan untuk aplikasi yang perlu menyimpan data dengan jumlah data yang besar, dengan skema data yang tidak konsisten.

_Keys_

_Entities_
 kumpulan key dan value yang dikombinasikan dengan identifier unik yang disebut dengan key

_Operations_
- put
- get
- delete

_Indexes and queries_
GQL memang memiliki beberapa keterbatasan yang tidak memungkinkan untuk melakukan query seperti pada SQL, namun GQL menggunakan index untuk mempercepat query dan menjalankan sejumlah query lanjutan. Index adalah kumpulan data yang dikelola dan datanya akan selalu up to date setiap ada perubahan data. 
Index akan mengelompokkan data sesuai dengan properti yang dijadikan indeks. Sebagai contoh, kita ingin menampilkan data employee yang memiliki pekerjaan sebagai Developer, jika menggunakan SQL, query akan dijalankan dan dilakukan pengecekan untuk setiap data yang ada pada tabel. Alhasil, makin banyak data yang disimpan, makin lama pula waktu yang diperlukan untuk menjalankan query. Sedangkan pada Datastore, data sudah dikelompokkan sesuai property job. Sehingga ketika query dijalankan, langsung menampilkan data sesuai indeks job Developer.

_Pricing_
Biaya penggunaan Cloud Datastore dihitung berdasarkan jumlah data yang disimpan dalam GB per bulan, jumlah pembacaan entity, penyimpanan entity, dan penghapusan entity. Harga ini berbeda-beda sesuai dengan lokasi penyimpanan. Datastore juga memiliki kuota gratis harian. Perhitungan biaya baru akan dilakukan ketika penggunaan sudah melebihi kuota yang diberikan setiap harinya.

# Cloud Firestore
nosql
Firestore ini termasuk jenis penyimpanan dokumen seperti Cloud Datastore dan Cloud Firestore adalah generasi selanjutnya dari Cloud Datastore.

_Model Data pada Cloud Firestore_
Firestore termasuk ke dalam penyimpanan dokumen. Artinya, data disimpan di dalam documents, setiap documents terdiri dari kumpulan pasangan key-value.  
    - _Collections_
    Setiap documents disimpan di dalam collections. Contoh collection pada gambar di atas adalah Academy. Collection ini berfungsi sebagai wadah dari documents.
    - _Documents_
    Untuk mengakses data yang disimpan di dalam Firestore maka kita perlu menentukan path menuju document yang diinginkan, misalnya seperti /Academy/Kade/Submission/submission-1.

_Pricing_

Dalam menggunakan Cloud Firestore, Anda akan dikenakan biaya berdasarkan:

- Jumlah operasi read, write, dan delete.
- Jumlah data yang disimpan.
- Jumlah bandwidth jaringan yang digunakan untuk Firestore request (egress).
- Lokasi Cloud Firestore.

Google Cloud menyediakan kuota free tier sebesar 1GB penyimpanan, operasi write & delete hingga 20.000 kali, dan read sebesar 50.000 kali setiap harinya.

# Cloud Bigtable
Cloud Bigtable termasuk ke dalam jenis database NoSQL.
Bigtable adalah wide-column database, maksudnya menyimpan data di dalam jumlah kolom yang besar, seperti tabel pada database relasional. Namun, setiap kolom tidak wajib diisi, sehingga tidak ada skema tetap yang menentukan struktur data.

Bigtable dirancang sebagai basis data berukuran besar, hingga berskala petabytes. Bigtable cocok untuk aplikasi yang membutuhkan throughput dan skalabilitas yang tinggi. Data yang biasa disimpan pada Cloud Bigtable antara lain:

- Time-series data. Contohnya seperti data penggunaan CPU dan memory dalam beberapa server.

- Marketing data. Data riwayat pembelian dan preferensi pelanggan.

- Financial data. Data yang berhubungan dengan transaksi dan mata uang.

- IoT data. Data laporan penggunaan energi dan perangkat yang terhubung dengan Internet of Things.

- Graph data. Contohnya seperti informasi bagaimana pengguna bisa saling terhubung satu sama lain.

_Model Penyimpanan pada Cloud Bigtable_
Data pada Bigtable disimpan pada sebuah tabel yang sangat besar dan scalable. Setiap baris pada tabel menunjukkan satu entitas yang terdiri dari beberapa kolom, kolom yang saling berhubungan bisa dikelompokkan menjadi sebuah column family. Setiap baris memiliki identifier atau diindeks oleh row key.

# Cloud BigQuery
serverless data warehouse yang dirancang untuk membuat analisis data menjadi lebih produktif.
BigQuery memungkinkan query data hingga ukuran terabytes dilakukan hanya dalam beberapa detik. BigQuery juga menggunakan SQL sebagai bahasa query sehingga lebih mudah dan lebih cepat dalam melakukan query.
sebagai alat analisis untuk melakukan scanning, filtering, dan mengumpulkan banyak baris data untuk menghasilkan ringkasan yang bermakna.
Selain itu BigQuery juga bisa diintegrasikan dengan Google Data Studio, Jupyter Notebook, atau tools lain yang mendukung untuk visualisasi data dan proses analisis data lainnya.

# Cloud Pub/Sub
Dengan Cloud Pub/Sub kita dapat mengirim dan menerima pesan antar aplikasi yang berjalan di cloud, lokal, atau lingkungan hybrid. Cloud Pub/Sub dirancang untuk menyediakan pengiriman “at least once” dengan latensi yang rendah skalabilitasnya sesuai kebutuhan hingga puluhan juta per detik.

_Konsep Cloud Pub/Sub_
- Topic :
Sebuah sumber daya yang menjadi tujuan pengiriman pesan oleh pengirim (publishers).

- Suscription : 
Sebuah sumber daya yang merepresentasikan aliran pesan dari topic untuk dikirimkan ke aplikasi yang berlangganan (subscribers).

- Message : 
Kombinasi data dan atribut yang dikirimkan oleh publisher menuju topic dan akan diterima oleh subscribers.

_Alur_
Alur sebuah pesan dikirimkan dari publisher hingga diterima oleh subscribers adalah sebagai berikut:
1. Pengirim atau bisa disebut juga publisher perlu membuat atau menentukan topic yang akan menjadi tujuan pengiriman data.

2. Ketika pesan sudah diterima oleh topic yang berada di dalam Pub/Sub, pesan akan disimpan di dalam Message Storage sampai diterima oleh subscriber. Pub/Sub akan mengembalikan ID pesan ke publisher yang menandakan pesan telah diterima.

3. Setelah pesan diterima oleh topic dan Pub/Sub, pesan akan dikirimkan ke subscription untuk nantinya dikirimkan ke penerima atau subscriber yang berlangganan ke subscription tersebut.

4. Terdapat 2 cara subscriber bisa menerima pesan dari subscription, yaitu push dan pull. Push subscription berarti subscription akan secara langsung mengirimkan pesan kepada subscriber, sedangkan pada pull subscription, pesan baru akan dikirimkan ketika subscriber menginginkan pesan tersebut dengan meminta melalui pull API.

5. Setelah pesan berhasil diterima, subscriber akan memberitahukan konfirmasi kepada subscription. Ketika subscription sudah menerima pemberitahuan bahwa pesan berhasil diterima, pesan tersebut akan dihapus dari antrian pesan. Sementara ketika pesan tidak berhasil diterima, subscription akan secara otomatis mengirimkan pesan tersebut kembali.

# Cloud Dataproc
Cloud Dataproc merupakan layanan dari Google Cloud untuk mengelola layanan Apache Spark dan Apache Hadoop. Kedua layanan ini merupakan layanan yang dirancang untuk aplikasi Big Data. Spark cocok digunakan untuk analisis dan machine learning, sementara Hadoop mendukung pengolahan batch data dan aplikasi big data.

Ada beberapa keunggulan dari menggunakan Cloud Dataproc, antara lain:

- Low cost: 
Dataproc dihargai hanya sebesar 1 sen ($0.010) untuk setiap vCPU yang digunakan per jamnya.

- Super fast: 
dengan Cloud Dataproc, kita bisa dengan cepat membuat cluster Spark dan Hadoop. Biasanya, dibutuhkan waktu 5 hingga 30 menit untuk cluster Spark dan Hadoop bisa berjalan pada on-premise, namun pada Dataproc hanya membutuhkan waktu rata-rata 90 detik.

- Integrated: 
Cloud Dataproc terintegrasi dengan berbagai layanan Google Cloud Platform lainnya, seperti BigQuery, Cloud Storage, Cloud Bigtable, dan Stackdriver.

- Managed:
Kita bisa mengoperasikan cluster Spark dan Hadoop dengan mudah melalui GCP console tanpa perlu bantuan dari tim admin atau software khusus.

- Simple and familiar: 
Dataproc menggunakan tools dan API yang sama dengan yang digunakan Spark dan Hadoop. Ini membuat kita tidak perlu mempelajari tools dan API baru untuk menggunakannya.

_Pricing_
Penggunaan Cloud Dataproc dikenakan biaya berdasarkan jumlah virtual CPU yang digunakan untuk seluruh master dan worker nodes dikalikan dengan berapa jam yang dibutuhkan untuk menjalankan jobs dalam satu bulan.

# Cloud Dataflow
Cloud Dataflow adalah layanan yang digunakan untuk data processing pada Google Cloud. Istilah data processing sendiri berarti mengambil sejumlah data dan mengolahnya menjadi set data baru yang lebih kaya akan informasi. Sebagai contoh, Anda memiliki data produk yang dijual pada aplikasi e-commerce, selain itu Anda juga punya data pelanggan yang sudah terdaftar, maka Anda dapat memproses data-data tersebut menjadi data baru misalnya data transaksi penjualan, atau lebih spesifik lagi data transaksi yang gagal atau dibatalkan.

Cloud Dataflow menggunakan model pemrograman dari Apache Beam yang memungkinkan kita untuk melakukan pengolahan data dengan membuat pipeline untuk batch dan streaming data. Stream data berarti data diproses secara real-time, sedangkan batch data hanya diproses satu kali atau secara periodik.

Proses pengolahan data pada Dataflow disebut dengan Job. Job ini berjalan pada sebuah pipeline yang dibuat oleh Apache Beam. Pipeline akan melakukan proses seperti membaca input data, mentransformasikan data, dan menghasilkan output dari data tersebut.

_Konsep Cloud Dataflow_
konsep dasar dari Apache Beam :
1. _Pipelines_ :
    pipeline berisi serangkaian proses komputasi, Setiap pipeline merepresentasikan sebuah job yang berulang.
2. _PCollection_ :
    input dan output data yang diolah di dalam pipeline akan disimpan di dalam objek PCollection.
3. _Transforms_ :
    Transforms adalah sebuah proses yang melakukan operasi transformasi data. Transform mengambil objek PCollections sebagai input, melakukan operasi seperti mengelompokkan data, menggabungkan data, filtering data, atau operasi lainnya, lalu menghasilkan objek PCollection sebagai output.
4. _ParDo_ :
    ParDo adalah operasi pemrosesan paralel inti dalam Apache Beam SDK. ParDo menjalankan fungsi yang ditentukan pengguna pada masing-masing elemen input PCollection. ParDo mengumpulkan nol atau lebih elemen output ke PCollection output. ParDo mentransformasikan elemen proses secara mandiri dan mungkin secara paralel.
5. _Pipeline I/O_ :
    Apache Beam memiliki I/O connectors yang memungkinkan kita untuk membaca data ke dalam pipeline dan menuliskan output datanya dari pipeline. Setiap I/O connector terdiri dari sebuah source dan sebuah sink.
6. _Aggregation_ :
    Aggregation adalah proses komputasi nilai dari beberapa elemen input. Pola komputasi utama untuk agregasi di Apache Beam adalah mengelompokkan semua elemen dengan key dan window yang sama. Kemudian, setiap elemen di dalam kelompok akan digabungkan menggunakan operasi asosiatif dan komutatif.
7. _User Defined Functions (UDFs)_ : 
    Beberapa operasi dalam Apache Beam memungkinkan kita untuk mengeksekusi kode fungsi yang kita definisikan sendiri untuk menjalankan transformasi. Sebuah pipeline mungkin berisi UDF yang ditulis dalam berbagai bahasa yang berbeda.
8. _Runner_
    Runner adalah software yang menerima dan menjalankan pipeline. Kebanyakan runner adalah adapter untuk parallel big-data processing systems. Namun ada juga runner yang hanya digunakan secara lokal untuk testing dan debugging.

_Pricing_
Untuk menggunakan Dataflow, Anda akan dikenai tagihan dengan parameter sebagai berikut:

1. Jenis job yang dikerjakan (batch atau stream).
2. Jenis mesin yang digunakan untuk mengerjakan job, meliputi jumlah vCPU dan memory.
2. Besar penyimpanan block yang digunakan.
3. Berapa jam yang dibutuhkan untuk menjalankan job dalam satu bulan.
4. Lokasi untuk menjalankan job.

    # Rangkuman Layanan Data GCP
Kita sudah berada di penghujung dari materi Layanan Data GCP. Yuk kita rangkum apa saja materi-materi yang telah dipelajari sejauh ini.



Pengantar ke Layanan Data GCP
Google Cloud Platform menyediakan layanan penyimpanan data yang lengkap dan beragam demi menyesuaikan kebutuhan pengembangan aplikasi. Beragam jenis data mulai dari data terstruktur, tidak terstruktur, transaksional dan relasional dapat disimpan di layanan dari Google Cloud seperti:

Google Cloud Storage
Cloud Persistent Disk
Cloud SQL
Cloud Spanner
Cloud Firestore
Cloud Datastore
Cloud Bigtable
Cloud BigQuery
Cloud Pub/Sub
Cloud Dataproc
Cloud Dataflow


Google Cloud Storage (GCS)
Google Cloud Storage adalah layanan penyimpanan dari Google Cloud yang ditujukan untuk menyimpan berkas berbasis object. Object adalah sebuah data individual yang dapat disimpan pada penyimpanan cloud.

Layanan penyimpanan object seperti ini digunakan untuk menyimpan berkas-berkas yang digunakan pada aplikasi supaya tidak membebani penyimpanan database atau penyimpanan pada komputer/mesin virtual.



Cloud Persistent Disk
Cloud Persistent Disk adalah layanan penyimpanan block dengan performa tinggi dan tahan lama untuk Google Cloud Platform. Persistent Disk menyediakan penyimpanan SSD dan HDD yang dapat dipasangkan ke mesin virtual pada Compute Engine atau Kubernetes Engine.



Cloud SQL
Cloud SQL adalah layanan basis data relasional dari Google Cloud Platform yang menyediakan berbagai fitur untuk memudahkan kita dalam membuat, mengatur, dan mengelola database pada cloud. Kita tidak perlu lagi memikirkan mengenai hardware, replikasi, dan update karena Cloud SQL sepenuhnya dikelola oleh Google Cloud. Cloud SQL mendukung beberapa database engine ternama, yaitu MySQL, SQL Server, dan PostgreSQL.



Cloud Spanner
Cloud Spanner di dalam dokumentasinya disebutkan sebagai “the first horizontally scalable, strongly consistent, relational database.” Seperti kita tahu, database relasional memiliki kelebihan dalam penyimpanan data terkait dengan banyaknya query yang bisa digunakan, konsistensi data yang tinggi, dan dukungan untuk pembuatan skema basis data. Namun database relasional masih bermasalah ketika harus menghadapi traffic dengan beban kerja yang besar.  

Masalah di atas sebenarnya sudah bisa diatasi dengan database non-relasional dengan kemampuan horizontal scalability-nya. Secara umum sebuah perusahaan akan menentukan penggunaan database relasional atau non-relasional sesuai dengan kebutuhan penyimpanan datanya. Cloud Spanner merupakan jawaban bagi Anda yang membutuhkan penyimpanan data terstruktur dengan data yang konsisten dan fitur query seperti database relasional pada umumnya, namun juga membutuhkan skalabilitas secara horizontal yang ditawarkan database non-relasional untuk mengatasi beban kerja yang tinggi.



Cloud Datastore
Cloud Datastore adalah layanan database NoSQL dari Google Cloud yang memiliki performa tinggi, automatic scaling, dan dibuat dengan tujuan untuk memudahkan proses pengembangan aplikasi. Cloud Datastore ini merupakan jenis penyimpanan non-relasional dan penyimpanan yang berbasis document (document storage). Berbeda dengan penyimpanan berbasis object atau database relasional yang sudah kita pelajari sebelumnya, jenis penyimpanan ini menyimpan data dalam bentuk kumpulan dokumen-dokumen. Dokumen di sini bisa digambarkan sebagai pasangan-pasangan key-value.



Cloud Firestore
Cloud Firestore adalah database NoSQL yang di-hosting pada infrastruktur cloud. Firestore ini termasuk jenis penyimpanan dokumen seperti Cloud Datastore dan Cloud Firestore adalah generasi selanjutnya dari Cloud Datastore.

Salah satu kelebihan dari Cloud Firestore adalah dapat menyimpan, sinkronisasi, dan query data dari berbagai perangkat secara real-time. Firestore juga terintegrasi dengan Firebase SDK sehingga bisa digunakan dengan mudah pada perangkat mobile.



Cloud Bigtable
Cloud Bigtable termasuk ke dalam jenis database NoSQL, namun tidak seperti Datastore dan Firestore yang merupakan document database, Bigtable adalah wide-column database. Database wide-column, sesuai dengan namanya, menyimpan data di dalam jumlah kolom yang besar, seperti tabel pada database relasional. Namun, setiap kolom tidak wajib diisi, sehingga tidak ada skema tetap yang menentukan struktur data.



Cloud BigQuery
Cloud BigQuery adalah serverless data warehouse yang dirancang untuk membuat analisis data menjadi lebih produktif karena infrastruktur sepenuhnya dikelola oleh Google. Dengan semakin besar dan banyaknya data yang perlu disimpan dan diolah, tentunya perlu waktu yang lama juga dalam melakukan query. BigQuery memungkinkan query data hingga ukuran terabytes dilakukan hanya dalam beberapa detik. BigQuery juga menggunakan SQL sebagai bahasa query sehingga lebih mudah dan lebih cepat dalam melakukan query.



Cloud Pub/Sub
Sama seperti manusia, mesin juga perlu untuk berkomunikasi satu sama lain. Cloud Pub/Sub adalah layanan sistem pengiriman pesan yang dibangun dan dikelola sepenuhnya oleh Google. Dengan Cloud Pub/Sub kita dapat mengirim dan menerima pesan antar aplikasi yang berjalan di cloud, lokal, atau lingkungan hybrid. Cloud Pub/Sub dirancang untuk menyediakan pengiriman “at least once” dengan latensi yang rendah skalabilitasnya sesuai kebutuhan hingga puluhan juta per detik.



Cloud Dataproc
Cloud Dataproc merupakan layanan dari Google Cloud untuk mengelola layanan Apache Spark dan Apache Hadoop. Kedua layanan ini merupakan layanan yang dirancang untuk aplikasi Big Data. Spark cocok digunakan untuk analisis dan machine learning, sementara Hadoop mendukung pengolahan batch data dan aplikasi big data.



Cloud Dataflow
Cloud Dataflow adalah layanan yang digunakan untuk data processing pada Google Cloud. Istilah data processing sendiri berarti mengambil sejumlah data dan mengolahnya menjadi set data baru yang lebih kaya akan informasi. Sebagai contoh, Anda memiliki data produk yang dijual pada aplikasi e-commerce, selain itu Anda juga punya data pelanggan yang sudah terdaftar, maka Anda dapat memproses data-data tersebut menjadi data baru misalnya data transaksi penjualan, atau lebih spesifik lagi data transaksi yang gagal atau dibatalkan.