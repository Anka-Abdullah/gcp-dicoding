National Institute of Standards and Technology (NIST) dalam publikasinya menyebutkan bahwa model cloud memiliki 5 karakteristik yang penting, yaitu:

1. on-demand self-device
    Pengguna atau konsumen layanan cloud dapat menyediakan kemampuan komputasi seperti server, jaringan, dan penyimpanan sesuai kebutuhan secara otomatis tanpa memerlukan interaksi manusia dengan penyedia cloud.

2. Broad Network self-service
    Layanan tersedia dan dapat diakses melalui jaringan internet dan dari berbagai macam platform user.

3. Resource Pooling.
    Cloud provider menyediakan kumpulan sumber daya komputasi yang digunakan untuk banyak konsumen dengan menggunakan model multi-tenant, dengan sumber daya fisik dan virtual yang ditugaskan dan dipindahkan secara dinamis sesuai dengan permintaan konsumen.

4. Rapid elasticity.
    Memiliki kemampuan untuk menyediakan dan menghentikan sumber daya secara elastis atau fleksibel, baik secara horizontal maupun vertikal sesuai dengan permintaan.

5. Measured service.
    Sistem cloud secara otomatis mengontrol dan mengoptimalkan penggunaan sumber daya dengan memanfaatkan kemampuan pengukuran pada beberapa tingkat abstraksi yang sesuai dengan jenis layanan. Penggunaan sumber daya bisa dipantau, dikendalikan, dan dilaporkan, memberikan transparansi bagi penyedia dan konsumen layanan yang digunakan.

NIST juga menyebutkan ada 3 jenis model layanan cloud, antara lain:
1. Software as a Service (SaaS).
    layanan yang disediakan oleh cloud provider kepada konsumennya berupa aplikasi yang berjalan di atas infrastruktur cloud.

2. Platform as a Service (PaaS).
    Pada jenis layanan ini cloud provider menyediakan layanan berupa lingkungan untuk testing dan deployment aplikasi. Infrastruktur cloud telah diatur dan menjadi tanggung jawab bagi cloud provider, sehingga konsumen bisa lebih fokus dalam pengembangan aplikasinya. Contoh dari PaaS adalah Google App Engine (GAE).

3. Infrastructure as a Service (IaaS).
    Pada jenis ini konsumen bisa dengan bebas menentukan sumber daya yang diperlukan dalam membangun infrastrukturnya sendiri, sementara cloud provider bertanggung jawab atas manajemen hardware dan perawatannya. Contoh dari IaaS adalah Google Compute Engine (GCE).

    Istilah “cloud computing” sendiri baru dikenalkan oleh Amazon pada tahun 2006, 2 tahun berikutnya Google meluncurkan versi beta dari Google App Engine, sebuah platform bagi developer untuk bisa membuat dan menjalankan aplikasi webnya pada data center milik Google.

# _Google Cloud SDK_
tools yang membuat kita bisa berinteraksi dengan Google Cloud Platform melalui terminal pada perangkat kita.

# _Cloud Shell_
Cloud Shell adalah command-line-interface berbasis web yang disediakan oleh Google Cloud Platform. Cloud Shell ini dapat kita akses melalui Cloud Console.

Kelebihan menggunakan Cloud Shell ini adalah Cloud SDK dan beberapa tools lain yang secara otomatis terinstal. Cloud Shell ini berjalan di atas sebuah virtual machine instances pada Google Cloud Platform. Di dalam Cloud Shell kita tersedia penyimpanan sebesar 5GB, built-in code editor, serta fungsionalitas untuk melakukan web preview.

Latihan Membuat Budget Alerts
Meskipun menggunakan layanan cloud dapat menurunkan biaya pembangunan infrastruktur, pengaturan sumber daya cloud merupakan hal yang tricky. Jika kita tidak berhati-hati, tagihan biaya bisa membengkak. Untuk itu, kita perlu mengatur budget supaya kita tidak mengeluarkan biaya lebih besar daripada yang seharusnya. Untuk mengatur budget, silakan ikuti langkah-langkah berikut:

Buka halaman Billing pada console.
Pilih menu Budgets & alerts.
Pilih Create Budget.
Selanjutnya, isi form dengan detail seperti berikut:
Name: Nama budget yang akan dibuat, misal My Monthly Budget.
Projects: Pilihan budget yang akan dibuat berlaku project tertentu, bisa juga pilih All projects.
Target amount: Berisi total budget yang ingin diatur, misal 100000.
Set alert threshold rules: Pengaturan peringatan budget yang akan dikirimkan melalui email ketika persentase yang ditentukan telah tercapai, bisa sesuai default saja.
Manage notifications: Opsi untuk menghubungkan pemberitahuan budget dengan layanan Cloud Pub/Sub, sesuai default saja.
Klik Finish.
Anda telah berhasil membuat budget alerts, peringatan akan dikirimkan melalui email ketika jumlah pengeluaran yang ditentukan telah tercapai.

Google Cloud Platform menyediakan Pricing Calculator yang akan membantu kita dalam memperkirakan dan mengestimasi dari segi biaya. Pricing Calculator ini dapat kita akses melalui web browser dengan membuka tautan berikut: https://cloud.google.com/products/calculator/.

Rangkuman Pengenalan Google Cloud Platform
Kita sudah berada di penghujung dari materi Pengenalan Google Cloud Platform. Yuk kita rangkum apa saja materi-materi yang telah dipelajari sejauh ini.



Pengenalan Komputasi Awan
Cloud adalah serangkaian layanan yang membantu developer fokus pada proyeknya, dibanding pada infrastruktur yang mengaktifkannya.

Cloud computing atau komputasi awan sendiri adalah model penyediaan sumber daya komputasi yang disesuaikan dengan permintaan (on-demand) dan dapat dihentikan secara cepat dan mudah. Perusahaan yang menyediakan layanan cloud computing biasa disebut dengan cloud provider.

National Institute of Standards and Technology (NIST) dalam publikasinya [1] menyebutkan bahwa model cloud memiliki 5 karakteristik yang penting, yaitu: 

On-demand self-service
Broad network access
Resource pooling
Rapid elasticity
Measured service
Selain itu NIST juga menyebutkan ada 3 jenis model layanan cloud, antara lain: 

Software as a Service (SaaS)
Platform as a Service (PaaS)
Infrastructure as a Service (IaaS)


Sejarah Komputasi Awan
Istilah “cloud computing” sendiri baru dikenalkan oleh Amazon pada tahun 2006, sebelum itu perusahaan memiliki data center-nya sendiri atau biasa disebut on-premise untuk menyimpan sumber daya yang mendukung aplikasi mereka.

Di awal 2000-an departemen IT mulai menggunakan virtualisasi untuk meningkatkan efisiensi. Dengan menggunakan virtualisasi terhadap perangkat keras pada data center, perusahaan dapat menggunakan sumber daya yang mereka miliki secara lebih efisien, dan meningkatkan kinerja pada perangkat yang dimiliki. Virtualisasi juga membuat perusahaan bisa lebih fleksibel dalam membangun dan mengatur infrastrukturnya.

Di tahun 2006 Amazon meluncurkan Amazon Web Service, sebuah platform yang digunakan untuk mengoperasikan perangkat-perangkat yang mereka miliki. Platform ini disewakan dan bisa digunakan oleh publik setelah sebelumnya hanya digunakan secara internal.

2 tahun berikutnya Google meluncurkan versi beta dari Google App Engine, sebuah platform bagi developer untuk bisa membuat dan menjalankan aplikasi webnya pada data center milik Google. Hingga sekarang cloud computing masih terus mengalami pengembangan. Infrastruktur dan layanan yang disediakan pun semakin lengkap.



Pengenalan Google Cloud Platform (GCP)
Saat ini ada banyak cloud providers seperti Google, Amazon, Microsoft, dan lainnya. Pada tahun 2008 Google meluncurkan Google App Engine sebagai layanan cloud pertama mereka. Google memberikan platform bagi developer untuk menjalankan aplikasinya di atas infrastruktur mereka, infrastruktur yang sama yang menjalankan aplikasi milik Google seperti Google Search dan Youtube.

Google merupakan rumah dan sumber dari berbagai perkembangan teknologi baru yang ada di dunia. Banyak teknologi yang telah dikembangkan oleh Googlers (karyawan Google) seperti Kubernetes, Bigtable, Cloud Datastore pada akhirnya bisa digunakan bukan hanya untuk Googlers, namun bisa digunakan secara publik melalui Google Cloud Platform.

Hingga saat ini ada lebih dari 100 produk layanan yang tersedia di Google Cloud Platform. Layanan-layanan ini dikelompokkan ke dalam beberapa kelompok produk.



GCP Free Tier
Google memberikan paket Free Tier yang menyediakan sumber daya gratis bagi penggunanya untuk mencoba layanan yang ada pada Google Cloud.

GCP Free Tier ini terdiri dari free trial selama 3 bulan dengan menggunakan credit sebesar $300 untuk memanfaatkan seluruh layanan GCP. Free trial diberikan bagi pengguna yang belum pernah mendaftar akun GCP sebelumnya.

Selain free trial, Google Cloud Platform juga menyediakan layanan Always Free. Program always free ini bisa digunakan oleh semua pengguna yang sudah terdaftar pada GCP. Program ini terbatas untuk beberapa layanan dengan penggunaan yang juga terbatas. 



Berinteraksi dengan Google Cloud Platform
Berikut ini adalah beberapa cara yang bisa dilakukan untuk berinteraksi dengan Google Cloud Platform. 

Google Cloud Console
Halaman ini merupakan antarmuka pengguna berbasis web untuk berinteraksi dengan Google Cloud Platform. Melalui halaman console ini kita bisa membuat project baru, mengatur dan memantau penggunaan sumber daya, informasi penagihan, dan informasi lainnya mengenai project aplikasi kita.
Google Cloud SDK
Google Cloud SDK merupakan tools yang membuat kita bisa berinteraksi dengan Google Cloud Platform melalui terminal pada perangkat kita. Cloud SDK menyediakan perintah seperti gcloud, gsutil, bq, dan perintah lainnya untuk mengakses layanan seperti Google Compute Engine, Google Cloud Storage, dan berbagai layanan GCP yang lainnya melalui command-line.
Cloud Shell
Cloud Shell adalah command-line-interface berbasis web yang disediakan oleh Google Cloud Platform. Cloud Shell ini dapat kita akses melalui Cloud Console.


GCP Billing Account
Billing account atau akun penagihan merupakan akun yang bertanggung jawab terhadap manajemen biaya dan pembayaran untuk sumber daya yang kita gunakan pada Google Cloud. 

Setiap membuat project baru, kita perlu menghubungkan project tersebut ke billing account sebelum bisa menggunakan sumber daya yang ada di Google Cloud.



GCP Pricing Calculator
Google Cloud Platform menyediakan Pricing Calculator yang akan membantu kita dalam memperkirakan dan mengestimasi dari segi biaya. Pricing Calculator ini dapat kita akses melalui web browser dengan membuka tautan berikut: https://cloud.google.com/products/calculator/.



Daftar Referensi
[1] Mell, Peter dan Grance, Timothy. "The NIST Definition of Cloud Computing." https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-145.pdf (diakses pada 14 Desember 2021)