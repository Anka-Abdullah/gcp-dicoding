# VPC ( Virtual Private Cloud )
untuk menghubungkan Google Compute Engine, Google Kubernetes Engine, dan Google App Engine. Semua layanan GCE, GKE, dan GAE bergantung kepada VPC untuk saling berkomunikasi. Tanpa VPC, kita tidak akan bisa membuat sumber daya GCE, GKE, atau GAE.

VPC bisa diibaratkan sebagai virtualisasi dari jaringan fisik. Jaringan VPC pada Google Cloud Platform bersifat global dan terdiri dari subnetworks (subnets) yang terdapat pada region.

Karena Google VPC bisa digunakan secara global, 2 atau lebih resource yang berbeda region bisa saling terhubung dan berkomunikasi tanpa perlu menggunakan VPN.

- Network dan Subnet

Sebuah VPC network terdiri dari satu atau beberapa partisi atau range IP yang biasa disebut dengan subnetwork atau subnet. Subnet terpasang dan diasosiasikan kepada sebuah region.

Terdapat 2 tipe atau metode pembuatan VPC, yaitu auto mode dan custom mode.

- _Auto mode_: 
    VPC jenis ini akan secara otomatis membuat subnet di setiap region yang ada. Ketika GCP menambahkan region baru, maka subnet untuk region tersebut juga akan secara otomatis terbuat. Ketika membuat project pertama kali, kita akan mendapatkan sebuah default auto mode VPC.

- _Custom mode_: 
    Pada custom mode kita memiliki kontrol penuh untuk mengatur subnet dan IP range. Kita bisa lebih leluasa mengatur arsitektur jaringan yang sesuai dengan kebutuhan.

- Routes
    Routes digunakan untuk mendefinisikan tujuan ke mana sebuah paket akan dikirim. Setiap network yang baru dibuat akan memiliki default route dan subnet route. Default route diarahkan untuk mengirim paket keluar dari VPC. Default route digunakan untuk mengakses internet publik, maka dari itu jika diperhatikan pada halaman routes, rute ini memiliki IP range tujuan 0.0.0.0/0 (publik). Sedangkan subnet route digunakan untuk mengarahkan paket ke masing-masing subnet, bisa dilihat setiap subnet memiliki route-nya sendiri.

- Firewall rules
Firewall adalah sebuah sistem keamanan yang dapat mengontrol lalu lintas masuk dan keluar dari sebuah jaringan. Ketika membuat firewall rules di dalam GCP, kita perlu menentukan jaringan VPC di mana firewall rules tersebut akan digunakan. Firewall rules tidak hanya berlaku untuk koneksi antar jaringan, namun juga antar instance di dalam jaringan yang sama.

Ketika membuat jaringan VPC, kita akan mendapat 2 firewall rules secara implisit, yaitu: mengizinkan setiap traffic yang keluar (egress) dan menolak setiap setiap traffic yang masuk ke dalam jaringan (ingress). Rules ini berlaku meskipun tidak tertulis di daftar firewall rules dan tidak dapat dihapus, namun rules ini dapat ditumpang tindih (over ride)menggunakan rules lain karena prioritasnya yang rendah.

Di dalam default VPC yang dibuat di awal, sudah terdapat 4 firewall rules:
- _default-allow-internal_
    Rules ini mengizinkan ingress dari semua protokol dan port untuk setiap instance di dalam VPC.

- _default-allow-ssh_
    Rules ini mengizinkan ingress pada TCP port 22, rules ini memungkinkan kita melakukan SSH terhadap instance dari jaringan mana pun.

- _default-allow-rdp_
    Rules ini mengizinkan ingress pada TCP port 3389, rules ini memungkinkan kita menggunakan Microsoft Remote Desktop Protocol (RDP) pada instance Windows.

- _default-allow-icmp_
    Rules ini mengizinkan ingress ICMP yang memungkinkan kita melakukan ping terhadap instance.


# Cloud DNS
Cloud DNS adalah layanan dari Google Cloud yang digunakan untuk manajemen Domain Name System (DNS). DNS adalah protokol yang digunakan untuk mengetahui alamat asli dari sebuah domain. Sederhananya, kita cukup menggunakan atau memanggil alamat web dari website yang ingin kita buka. Sebenarnya aplikasi web tersebut tersimpan di dalam sebuah mesin yang memiliki alamat IP untuk diakses. DNS-lah yang berperan untuk menerjemahkan dan mengarahkan kita ke alamat IP tersebut sehingga kita tidak perlu menghafal alamat IP yang susah diingat.

Untuk bisa menggunakan Google Cloud DNS, kita perlu membuat DNS zone yang berperan sebagai server DNS yang akan menyimpan DNS record dan informasi terkait name server. Cloud DNS menawarkan 2 jenis zone, yaitu public zone dan private zone.

Public zone membuat DNS bisa tampil secara publik dan bisa diakses melalui internet.

Sedangkan private zone akan membuat domain name untuk VM, load balancer, dan resource lain bisa diakses tanpa diekspos ke internet. Private zone bisa digunakan di dalam jaringan VPC yang sama, sehingga cocok untuk komunikasi sumber daya yang tidak memerlukan publikasi ke internet.

Untuk membuat zone dan menggunakan Cloud DNS kita perlu memiliki domain sendiri yang bisa digunakan. Setelah zone terbuat, kita perlu membuat record set bertipe A (IPv4) atau AAAA (IPv6) untuk mengarahkan domain kita ke IP yang ingin kita tuju. Terakhir, kita perlu mengubah pengaturan name server di dalam domain registrar kita dengan name server yang diberikan oleh Cloud DNS.

_Pricing_
Harga penggunaan Cloud DNS dihitung berdasarkan jumlah zone yang digunakan dan traffic yang mengakses domain. Semakin besar zone dan traffic yang digunakan maka akan semakin murah juga harga per zone dan per 1 juta query-nya.

# Cloud VPN
Cloud VPN adalah layanan hybrid networking dari Google Cloud Platform yang berfungsi untuk menghubungkan jaringan VPC dengan jaringan on-premises. 

- Ada beberapa terminologi yang digunakan dan perlu dipahami dalam menggunakan Cloud VPN:
1. Cloud VPN gateway
    Sumber daya regional yang berfungsi untuk menghubungkan jaringan cloud dengan on-premises VPN gateway atau cloud VPN gateway lain.

2. On-premises VPN gateway
    VPN gateway yang ada pada on-premise. Berfungsi untuk menghubungkan dengan cloud VPN.

3. VPN tunnel
    VPN tunnel menghubungkan antara 2 VPN gateway, berfungsi sebagai jalur lalu lintas data.

4. Internet Key Exchange (IKE)
    IKE adalah protokol yang digunakan untuk autentikasi dan mengatur session key untuk enkripsi traffic.

5. Project ID
    Project ID yang terdapat pada project GCP, digunakan sebagai identitas ketika menggunakan cloud VPN.

- Cloud VPN menawarkan 3 metode routing untuk VPN tunnel:
1. Dynamic (BGP) routing
    Pada metode ini Cloud Router akan menggunakan Border Gateway Protocol (BGP) untuk mengatur routing pada Cloud VPN. Metode ini akan secara otomatis memperbarui VPN tunnel ketika konfigurasi routes berubah. Metode ini sangat direkomendasikan karena saat terjadi perubahan routes, tunnel tidak akan dibuat ulang. Namun untuk menggunakan metode ini, masing-masing VPN gateway harus memiliki dukungan terhadap BGP.

2. Policy based routing
    Jika menggunakan metode ini, kita perlu menentukan remote network IP ranges dan local subnet tujuan ketika membuat VPN tunnel. GCP akan secara otomatis membuat route statis dari setiap jaringan ketika tunnel dibuat.

3. Route based routing
    Pada metode ini kita hanya menentukan remote network IP ranges.

# Cloud Load Balancing (CLB)
Cloud Load Balancing adalah layanan load balancer dari Google Cloud Platform. Layanan ini berfungsi untuk membagi beban yang diterima sebuah instance. CLB juga bisa digunakan untuk membagi beban akses ke instance yang terdekat dengan pengguna sehingga dapat menghadirkan latensi yang rendah. Ada beberapa jenis load balancer pada Google Cloud, antara lain:
- HTTP(S) Load Balancing
- SSL Proxy Load Balancing
- TCP Proxy Load Balancing
- Network TCP/UDP Load Balancing
- Internal TCP/UDP Load Balancing

Cloud Load Balancer bisa diklasifikasikan menjadi beberapa kelompok:
+ Global load balancing
    Global load balancing digunakan untuk user dan instance yang tersebar secara global. Ketika user ingin mengakses suatu aplikasi, user hanya perlu mengakses sebuah IP address atau domain, selanjutnya load balancer akan mengarahkan request tersebut ke instance yang terdekat sehingga meminimalkan latensi. Load balancer yang bisa digunakan untuk global load balancing adalah: HTTP(S), SSL proxy, dan TCP proxy load balancing.

+ Regional load balancing
    Regional load balancing digunakan ketika instance yang Anda miliki berada pada satu region dan traffic akan dibagi ke masing-masing zone yang ada pada region tersebut. Regional load balancer menggunakan TCP/UDP load balancing untuk membagi beban kerja.

+ External dan internal load balancing
    Ini adalah klasifikasi load balancer berdasarkan sumber traffic yang masuk. External load balancing digunakan ketika traffic masuk dari internet public untuk mengakses sebuah aplikasi front-end. Sedangkan internal load balancing digunakan untuk komunikasi di dalam jaringan GCP.

Menggunakan load balancer akan meningkatkan ketersediaan dan fault tolerance pada aplikasi yang kita kembangkan.