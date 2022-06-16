ankagcp
1. _Google Compute Engine (GCE)._
    Virtual Machines (VM) yang berjalan pada jaringan data center Google. (control penuh atas infrastruktur seperti ssd, GPU, ram)

# Fitur : 
    - Virtual Machine dengan kinerja pemrosesan dan penyimpanan yang tinggi.
    
    - Auto-scaling dan pembagian beban untuk VM yang bersifat homogen.
    
    - Akses langsung ke GPU yang bisa digunakan untuk mempercepat kinerja.
    
    - Dukungan berbagai versi dari sistem operasi seperti Linux dan Windows.
    
    - Preemptible (dapat mengambil dari proses lain tanpa ada efek lain) VM yang dapat dibuat dan dijalankan dengan harga yang lebih rendah daripada VM normal.

_GCE Instance_
    VM yang berjalan di infrastruktur milik Google.
    Dalam membuat instance kita bisa menggunakan GCP console, atau melalui terminal/shell menggunakan perintah gcloud compute.

    Di dalam siklus hidup sebuah instance memiliki state sebagai berikut:

    - Provisioning: Fase ketika sumber daya komputasi dialokasikan ke instance. Pada tahap ini instance masih belum bisa digunakan.
    - Staging: Sumber daya telah dialokasikan ke instance dan pada tahap ini dilakukan booting.
    - Running: Fase ketika instance sudah berjalan dan bisa digunakan.
    - Stopping: Kondisi ketika instance akan dihentikan yang bisa disebabkan karena permintaan dari user atau karena terjadi kegagalan.
    - Terminated: Kondisi ketika instance VM sudah mati.

_Preemptible VM_
    instamce yang bertahan kurang dari 24 jam atau bisa di terminate kurang dari 24 jam, lebih murah 80% dari compute engine.

_Instance Template_
    untuk menyimpan konfigurasi pada VM, ketika membuat VM instance baru nantinya konfigurasi ini bisa langsung digunakan.
    Instance Template di perlukan untuk membuat VM yang bisa auto scale menggunakan managed instance group.

_Instance Groups_
    memungkinkan kita mengelompokan beberapa VM instance
    2 jenis instance groups : 
        - managed instance groups
        - Unmanaged instance group
    _Managed Instance Group (MIG)_ terdiri dari beberapa VM instance yang identik.
    kelebihan MIG :
        - Ketersediaan tinggi
        Ketika sebuah instance di dalam instance group mengalami crash atau terhenti, MIG akan secara otomatis membuat ulang instance tersebut. MIG juga dilengkapi dengan health check yang berfungsi untuk memantau apakah sebuah instance telah berjalan dengan baik dan benar, jika tidak maka instance tersebut akan dihapus lalu dibuat ulang. MIG juga memiliki sistem load balancing yang bertugas untuk membagi beban kerja kepada setiap instance yang ada di dalam instance group.
        - Skalabilitas 
        Ketika membuat sebuah managed instance group, kita perlu menentukan jumlah instance minimal dan maksimal yang ada di dalam instance group. MIG mendukung autoscaling, di mana ketika beban yang diterima sebuah instance sudah terlalu besar, maka MIG akan secara otomatis membuat instance baru dan menghapusnya ketika beban sudah berkurang.
        - Update otomatis
        Di dalam distribusi aplikasi dikenal istilah rolling update. Istilah ini menggambarkan situasi ketika host melakukan pembaruan pada aplikasi yang sedang berjalan tanpa ada downtime atau membuat aplikasi menjadi offline. MIG mendukung beberapa skenario untuk update secara mudah dan aman.
    _Unmanaged Instance Groups_
    bersifat heterogen
    Jenis instance group ini digunakan untuk mengelompokkan VM meskipun tidak identik atau memiliki template yang sama. Unmanaged instance group tidak memiliki fitur autoscaling, auto-healing, atau auto update seperti managed instance group.

<!--  -->

2. _Google Kubernetes Engine (GKE)._
    Layanan Kubernetes terkelola yang berfungsi untuk mengatur Docker containers. 
_container 101_
    Container adalah sebuah mekanisme pengemasan aplikasi yang dapat diabstraksi dari lingkungan aplikasi tersebut dijalankan. Singkatnya, container adalah paket aplikasi yang memungkinkan kita bisa melakukan deployment dengan cepat dan konsisten di beberapa lingkungan yang berbeda seperti data center, cloud publik, perangkat personal dari developer.
    container memiliki ukuran yang relatif lebih kecil karena tidak menyertakan sistem operasi di dalam paketnya seperti pada VM.
    Container memungkinkan terjadinya pemisahan tugas.
    kelebihan container :
    - Lingkungan yang konsisten :
    Dengan container, developer bisa menentukan software dependency seperti versi bahasa atau library yang digunakan, tentunya ini memudahkan proses devops karena aplikasi yang digunakan akan tetap konsisten meskipun berjalan di banyak tempat.
    - jalankan dimana saja
    container bisa berjalan di platform linux, mac, windows
    - isolasi
    Karena container memvirtualisasikan CPU, memori, penyimpanan, dan jaringan pada level OS, menyediakan bagi developer tampilan sandbox OS yang secara logis terisolasi dari aplikasi lain.

_Kubernetes cluster architecture_
instance dari GKE disebut cluster. setiap cluster terdiri dari beberapa cluster master dan satu atau beberapa nodes. Cluster master bertugas untuk mengatur cluster dan mengelola layanan yang disediakan oleh Kubernetes, seperti Kubernetes API, controllers, dan schedulers. Cluster master bisa direplikasi untuk menyediakan ketersediaan tinggi dan toleransi kesalahan. Untuk berinteraksi dengan cluster, kita perlu menggunakan perintah kubectl.

_Node_ adalah VM yang menjalankan aplikasi di dalam container. Node berkomunikasi dengan cluster master melalui agent bernama kubelet. Sama seperti membuat VM, ketika membuat cluster, kita perlu menentukan jenis mesin yang akan digunakan untuk menjalankan containers.

_Pods_ adalah objek terkecil di dalam Kubernetes dan bertugas untuk menjalankan proses di dalam cluster. Pods terdiri dari satu container atau lebih. Pada umumnya pod hanya menggunakan satu container, kecuali untuk beberapa penggunaan yang lebih advanced alias kompleks. Beberapa container yang ada di dalam pod bekerja sebagai satu entitas dan saling berbagi sumber daya pada pod.

_Deployment_ merepresentasikan kumpulan beberapa pods yang identik. Deployment akan menjalankan beberapa replika dari aplikasi dan secara otomatis menggantikan instance yang mengalami kegagalan atau tidak responsif. Ini memungkinkan aplikasi memiliki ketersediaan yang tinggi bagi pengguna.

_Service_
Setiap pod di dalam cluster memiliki alamat IP internal. Ketika pod telah menyelesaikan siklus hidupnya, maka pod akan dihapuskan. Begitu juga ketika aplikasi berjalan lalu pod terdeteksi sedang dalam kondisi “tidak sehat” pod bisa dihapus dan dibuat ulang. Alamat IP baru akan diberikan kepada pod baru yang menggantikannya. Tentunya hal ini menyebabkan komunikasi di dalam cluster tidak bisa bergantung terhadap alamat IP. Untuk mengatasi ini, kita bisa menggunakan service.

Service adalah sebuah objek yang menyediakan API endpoint dengan alamat IP yang stabil. Service juga berperan sebagai load balancer untuk membagi beban pekerjaan kepada masing-masing cluster.

terdapat 5 jenis service :
    - _ClusterIP (default)_
    untuk klien internal yang perlu mengakses IP internal.
    - _NodePort_ 
    klien mengirim request ke alamat IP dan port pada sebuah node. NodePort merupakan ekstensi dari ClusterIP, sehingga NodePort pasti memiliki ClusterIP
    - _Loadbalancer_
    klien mengirim request ke alamat IP dari sebuah network load balancer. ClusterIP dan NodePort termasuk di dalam LoadBalancer.
    - _ExternalName_
    klien internal menggunakan DNS dari sebuah service sebagai alias dari external DNS.
    - _Headless_
    digunakan ketika membutuhkan pod grouping, namun tidak membutuhkan IP yang stabil.
    - _ReplicaSet_
    ReplicaSet adalah salah satu controller yang digunakan pada deployment. Controller ini bertugas untuk memastikan jumlah pods yang berjalan telah sesuai. Ketika sebuah pod harus dihapus karena mengalami kegagalan, ReplicaSet akan mendeteksi bahwa tidak terdapat cukup pods untuk menjalankan aplikasi dan akan membuat pods baru.
    - _StatefulSet_
    StatefulSet memberikan ID unik kepada pods, ini memungkinkan Kubernetes untuk menandai pod mana yang digunakan oleh client. StatefulSet digunakan untuk aplikasi yang membutuhkan identifikasi jaringan yang unik atau penyimpanan yang stabil.DaemonSet
    - _DaemonSet_
    berfungsi untuk memastikan bahwa semua atau beberapa nodes memiliki salinan pod. Ketika nodes ditambahkan ke dalam cluster, pods juga akan ditambahkan ke cluster tersebut. Ketika DaemonSet dihapus, semua pods yang telah dibuat juga ikut terhapus.
    - _Pricing_
    agihan biaya GKE berdasarkan jenis mesin dan tergantung penggunaan sumber daya

    <!--  -->

3. _Google App Engine (GAE)._
    serverless with container
    fitur : 
    - _Popular languages_
    dukungan bahasa pemograman poppuler
    - _Fully managed_
    nfrastruktur dan lingkungan pengembangan telah diatur penuh oleh App Engine
    - _Monitoring, Logging & Diagnostics_
    memantau kondisi aplikasi
    - _Application versioning_
    kemudahan untuk membuat beberapa versi aplikasi
    - _Traffic splitting_
    memungkinkan pengarahan user ke beberapa versi aplikasi yang berbeda untuk mengurangi rafik pada satu versi aplikasi
    - _Application security_
    Meningkatkan keamanan aplikasi Anda dengan memanfaatkan sertifikat SSL/TLS yang dikelola secara default di domain khusus aplikasi Anda.
    - _service Ecosystem_
    Dukungan ekosistem layanan GCP seperti cloud developer tools.

1 project 1 AppEngine

_App Engine Environment_
1. standard Environment
aplikasi dijalankan di dalam sebuah container.

2. Flexible Environment
Aplikasi dijalankan di dalam Docker containers di mesin virtual Compute Engine (VM).

Flexible environment digunakan untuk aplikasi dengan fluktuasi traffic yang konsisten. Developer bisa melakukan sejumlah kustomisasi terhadap library atau tools yang digunakan dengan cara melakukan deployment container sendiri. Tidak seperti standard environment yang bisa melakukan scaling hingga 0 instance, flex environment minimal menjalankan satu container untuk menjalankan service. Anda akan tetap terkena tagihan ketikan container tersebut menyala meskipun tidak ada aktivitas pada sistem.

_Pricing_
Sama seperti layanan lain, tarif App Engine dihitung sesuai dengan resource yang digunakan. Tarif App Engine untuk standard environment dihitung per jam sesuai dengan Instance yang digunakan, sedangkan flexible environment dihitung per jam sesuai dengan spesifikasi mesin yang digunakan. Tarif ini juga berbeda untuk setiap region.

Untuk membagi traffic, pilih Split Traffic.
Terdapat 3 cara pembagian traffic: IP address, Cookie, dan Random. 

- Jika menggunakan IP address, setiap IP yang melakukan request akan ditranslasikan menjadi bentuk hash antara 0-999. Penggunaan metode ini bisa menimbulkan masalah ketika pengguna berubah alamat IP ketika berpindah jaringan.
- Cara yang lebih disarankan adalah dengan menggunakan Cookie. Ketika sebuah HTTP request memiliki header cookie bernama GOOGAPPUID, request tersebut akan diarahkan ke versi yang ditentukan.
- Metode Random akan secara acak mengarahkan request yang masuk sesuai pembagian yang ditentukan.


<!--  -->

<!--  -->
Perlu diingat bahwa untuk men-deploy Service pertama kali di Google App Engine, Anda harus menamainya default terlebih dahulu. Setelah berhasil di-deploy, barulah Anda deploy ulang dengan nama service yang diinginkan. Namun, untuk saat ini, kita tak perlu menuliskan baris service terlebih dahulu, cukup runtime saja.
<!--  -->

4. _Google Cloud Functions (GCF)._
    serverless
Fitur lengkap dan kelebihan yang ada pada Google Cloud Functions adalah:

_Open and familiar._
GCF memberikan dukungan untuk environment dan bahasa pemrograman populer seperti JavaScript (Node.js), Python, dan Go.

_No server management._
Kita bisa lebih fokus dalam pengembangan dan deployment aplikasi karena infrastruktur dan server sudah diatur sepenuhnya oleh Google.

_Runs code in response to events._
Function akan dijalankan ketika ada trigger dari akses HTTP, Firebase, atau layanan dari Google Cloud Platform lain.

_Pay only while your code runs._
Biaya dihitung hanya setiap kali fungsi dijalankan.

_Scales automatically._
Scaling otomatis sesuai kebutuhan sumber daya yang digunakan hingga skala global.

_Connects and extends services._
Dengan ini, kita bisa menghubungkan dan mengintegrasikan sejumlah layanan seperti GCP, Firebase, Google Assistant, dan layanan pihak ketiga lainnya.

Pricing
Beberapa parameter yang menjadi perhitungan biaya GCF per bulan, antara lain:

Pemanggilan fungsi.
GCF memiliki tarif $0.40 untuk setiap 1 juta request. 2 juta request pertama masih termasuk ke dalam free tier.
Waktu komputasi.
Waktu yang dibutuhkan untuk menjalankan sebuah fungsi juga mempengaruhi biaya yang harus dibayar. Waktu komputasi dihitung dengan satuan 100 ms.
Jaringan.
Untuk lalu lintas data keluar dari GCP, Anda akan dikenakan tagihan sebesar $0.12 setiap GB dengan free tier sebesar 15 GB.

# _Pricing_
Tagihan biaya untuk Google Cloud Engine dihitung sesuai dengan sumber daya yang dipakai seperti ukuran disk, jenis mesin, dan penggunaan jaringan. Perhitungan ini dilakukan per detik dengan minimal 1 menit. Model perhitungan seperti ini membuat biaya yang dikeluarkan menjadi lebih murah karena perhitungan akan berhenti di saat yang sama ketika VM dihentikan atau dihapus.

<!--  -->
<!--  -->

# Rangkuman Layanan Komputasi GCP

Kita sudah berada di penghujung dari materi Layanan Komputasi GCP. Yuk kita rangkum apa saja materi-materi yang telah dipelajari sejauh ini.



Pengantar ke Layanan Komputasi GCP
Layanan komputasi merupakan komponen terpenting dalam menjalankan sebuah aplikasi. Setiap aplikasi memerlukan mesin yang memproses dan menjalankan programnya. Google Cloud Platform menyediakan beberapa opsi layanan komputasi yang bisa digunakan sesuai dengan kebutuhan. Pada modul ini kita akan mempelajari layanan-layanan komputasi dari GCP tersebut, antara lain:

Google Compute Engine (GCE).
Google Kubernetes Engine (GKE).
Google App Engine (GAE).
Google Cloud Functions (GCF).


Google Compute Engine
Google Compute Engine menyediakan mesin virtual yang berjalan di data center Google yang terhubung dengan jaringan fiber di seluruh dunia. Compute Engine menawarkan beberapa fitur seperti berikut:

Virtual Machine dengan kinerja pemrosesan dan penyimpanan yang tinggi.
Auto-scaling dan pembagian beban untuk VM yang bersifat homogen.
Akses langsung ke GPU yang bisa digunakan untuk mempercepat kinerja.
Dukungan berbagai versi dari sistem operasi seperti Linux dan Windows.
Preemptible (dapat mengambil dari proses lain tanpa ada efek lain) VM yang dapat dibuat dan dijalankan dengan harga yang lebih rendah daripada VM normal.
Compute Engine cocok digunakan bagi Anda yang memerlukan kontrol penuh atas infrastruktur dan akses langsung ke hardware seperti GPU dan SSD. Anda juga dapat memindahkan data pada data center atau colocation menuju cloud dengan menggunakan GCE.



Google Kubernetes Engine
Google Kubernetes Engine adalah layanan dari Google Cloud Platform untuk mengelola Kubernetes. Kubernetes sendiri adalah sebuah container orchestrator yang berfungsi untuk menjalankan container di dalam cluster VM, memantau kondisi container, dan mengelola siklus hidup dari VM instance.



Google App Engine
Google App Engine adalah sebuah platform-as-a-service (PaaS) dari Google yang menyediakan layanan untuk meng-hosting aplikasi mulai dari web dan mobile atau IoT backend. Dengan App Engine, kita hanya perlu fokus dalam mengembangkan aplikasi dan mengunggahnya ke Google App Engine. Infrastruktur yang digunakan untuk menjalankan aplikasi sepenuhnya menjadi tanggung jawab dari Google. 

App Engine juga akan secara otomatis menaikkan sumber daya (scale up) jika terjadi lonjakan jumlah pengguna dan mengurangi (scale down) menyesuaikan dengan jumlah pengguna.  



Google Cloud Functions
Google Cloud Functions adalah sebuah model komputasi serverless (tanpa server) untuk membangun aplikasi cloud. Cloud Functions bersifat serverless seperti Google App Engine, namun Cloud Functions memiliki ukuran lebih kecil karena yang kita deploy adalah kode logika yang berada di dalam fungsi, bukan aplikasi seperti pada App Engine. 

Kita tidak perlu melakukan pengaturan terhadap infrastruktur atau server yang menjalankan Cloud Functions. Layanan seperti ini bisa disebut juga Function as a Service (FaaS).