## SERVER DI GCP

server dibagi dengan metode _virtualisasi_, yakni membagi berbagai sumber daya server sesuai dengan kebutuhan dengan menggunakan software _Hypervisor_.

# pilihan kostumisasi di GCP >>>
<!-- kostumisasi server di GCP : CPU, RAM, OS, File System, GPU -->

 # *Predefined Machine Types*
    mesin siap pakai yang di kategorikan berdasarkan kapasitas server, Anda tinggal memilih nama tipe mesin yang sesuai.

 # *Costum Machine types*
    VM, bisa menentukan memori dan vCPU (Virtual CPU) yang dibtuhkan.

 # *Sistem operasi dan penyimpanan Berkas File Sistem*
  
 # *Preemptible Machines*
    pilihan alternatif VM jika ingin menjalankan sebuah instance dengan harga yanng jauh lebih rendah daripada instance normal.
    
    Namun tools ini hanya cocok digunakan untuk aplikasi yang dapat mentoleransi kesalahan jika sewaktu-waktu instance yanng memprosesnya berhenti

    karena preemptible machines merupakan *short-term instance* (instance yang erjalan sementara), jadi kelemahannya tidak dapat bertahan dalam jangka panjang.

 # *Confidential Computing* 
jika data yang disimpan sangat rahasia (confodential) dan harus memenuhi aturan keamanan yang lebih ketat, GCE (Google Computer Engine) menawarkan 2 pilihan : 

 * _Sole Tenant Node_
    ideal untuk VM mandiri tidak untuk terbagi dengan pelanggan lain, diperuntukan untuk memenuhi persyaratan kepatuhan (compliance requirement) tertentu.
 
 * _Shielded VM_
    VM yang di perkuat untuk mencegah adanya perubahan boot sector yang diakibatkan serangan virus atau perangkat lunak jahat

# Rightsizing
fitur _rightsizing recommendation_ berfungsi untuk merekomendasi ukuran VM yang sesuai dengan workload yang dibutuhkan layanan setelah VM dijalankan

!!! >>>
# Google Kubernetes Engine (GKE) 
        selain itu ada Google Kubernetes Engine (GKE) yang merupakan layanan GCP yang memadukan teknologi hybrid.

        itu artinya teknologi Iaas dan PaaS digabungkan,
        anda dapat mengkostumisasi beberap konfiguras, seperti ketersediaan (Availability) dan ketahanan (Reliability)

# Cloud Run
   layanan yang dapat memngembangkan dan men-deplou aplikasi _container_. Layanan ini memeiliki fitur skalabilitas tinggi, server akan memiliki fitur skalabilitas tinggi dimana server akan dikelola sepenuhnya oleh provider cloud.

# Cloud Function
   layanan untuk menjalalankan kode sederhana, tanpa mmemikirkakn pengelolaan server.

Berbagai layanan tersebut dapat saling berkomunikasi melealui sebuah arsitektur jaringan milik GCP yaitu _Virtual Private Cloud (VPC)_


## JARINGAN DI GCP

# Zones dan Region
   _Zones_ adalah suatu wilayah yang mewakili data center milik Google. Zones merupakan area deployment untuk sumber daya yang ada di GCP yang bertempat di wilayah tertentu dengan tingkat ketersediaan yang tinggi (High Availability). 
   
   Biasanya, antar-zone dalam region yang sama berjarak minimal 160 KM dan dihubungkan dengan koneksi super cepat sehingga menghasilkan latensi yang sangat rendah.

   _Region_ adalah wilayah geografis yang terdiri dari beberapa zona (zones). Jadi, mudahnya Region ini merupakan kumpulan data center yang terdiri dari beberapa zona yang tersebar di satu wilayah yang sama, tetapi letak setiap zona akan berbeda satu dengan yang lainnya dalam wilayah tersebut. 

   Di GCP, Regions minimal terdiri dari tiga zones berbeda.

   praktik terbaik implementasi dari zone dan region adalah menempatkan instance di lebih dari satu zona atau di beberapa region. 

   ini dilakukan untuk berjaga-jaga bila salah satu zone atau region yang anda pilih mengalami kendala, maka aplikasi Anda masih berjalan dengan zone atau region lain (mekanisme Handling Failures).

## VPC
   VPC adalah mekanisme jaringan virtual yang memudahkan Anda untuk bisa berkomunikasi antar-region di GCP. Karena VPC bersifat global, itu artinya Anda dapat mengatur dan mengelola komunikasi secara leluasa mencakup jaringan Google yang tersebar di seluruh dunia.

   vpc scalable, dan juga berguana untuk mengisolasi lingkungan jaringan satu sama lain.

# Objek-Objek VPC
   !!!>>> Pada dasarnya, VPC merupakan sekumpulan objek jaringan yang sering kita temui ketika mengonfigurasi jaringan pada server fisik di sebuah data center.

 # _Network_
   network di GCP bersifat global, meliputi semua region di seluruh dunia

agar setiap perangkat dapat dikenali dan terhubung sesuai dengan tujuannya, maka dibentuklah sebuah protokol (aturan) yang disebut IP _(Internet Protocol)_ Address,  alamat virtual sebagai identitas saat berkomunikasi di jaringan.

 # _IP publik dan IP privat_
_IP publik_ merupakan alamat ip yang di gunakan unutk mengakses jaringan secara global. ia merupakan tanda pengenal yang di berikan oleh provider internet.
_IP privat_ digunakan untuk komunikasi lokal saja, komunikasi lokal ini tidak memerlukan internet agar saling terhubung. Alamat IP ini tidak boleh terpublikasi secara global dan tidak akan bisa digunakan untuk tanda pengenal ketika kita berkomunikasi melalui internet sesuai dengan aturan yang dikeluarkan oleh Internet Assigned Number Authority (IANA).
_IANA_ merupakan lembaga yang mengatur pengalokasian alamat IP yang berlaku di seluruh dunia. Untuk aturan pengalokasian dan penggunaan IP privat tertuang dalam aturan RFC 1918.

RFC 1918 menjadi patokkan ketika kita ingin membagi lingkungan jaringan yang biasa kita sebut mekanisme subnetting. 

# Subnet
   Subnet merupakan cara pembagian atau pemisahan lingkungan kerja jaringan. Kenapa jaringan perlu dibagi dan dipisah? Tentu ini untuk memudahkan kita dalam mengenali dari mana client berasal sehingga dapat berkomunikasi dengan layanan yang diinginkan dan pembagian lingkungan yang lebih jelas. 

<<< VPC dalam pengalokasian IP address menggunakan aturan CIDR. >>>
_classless inter-domain Routing (CIDR)_ : metode untuk pengalikasian dan pe-rute-an alamat IP. Sebagai contoh, sebuah IP range 192.168.1.0/24 akan memiliki total IP address sebanyak 256.

# FIrewall Rules
<!-- aturan firewall -->
digunakan untuk membatasi kases ke instance. Secara default, aturan firewall mengizinkan (allow) semua lalu lintas keluar (egress atau outgoing) dan menolak (deny) semua lalu lintas masuk (ingress atau incoming)

latihan menjalankan server
https://www.dicoding.com/academies/337/tutorials/20072?from=20067


# CLoud Monitoring
untuk memantau berbagai sumber daya cloud
antatra lain : 
   - CPU Utilization : menunjukan penggunaan CPU.
   - Network Trafic  : menunjukan trafic.
   - Uptime Check    : menampilkan ketersediaan sumber daya, apakah ada masalah atau tidak.

# Cloud Logging
berisi loging pada layanan yang berjalan

## Rangkuman Server dan Jaringan


Server di GCP
Cara kerja server di GCP dibagi dan disewakan sesuai dengan kebutuhan pelanggan.

Server ini dibagi dengan menggunakan metode virtualisasi, yakni membagi berbagai sumber daya server sesuai dengan kebutuhan menggunakan sebuah software yang dinamakan Hypervisor. 

Hypervisor dapat memisahkan sumber daya fisik dan membaginya di lingkungan virtual. Dari situlah server-server di cloud dapat dikostumisasi di lingkungan virtual.

Google Compute Engine (GCE) merupakan layanan Infrastructure as a Services (IaaS) di mana Kostumisasi server yang ditawarkan oleh GCE terbagi menjadi beberapa pilihan, yakni:

Predefined Machine types
Tipe mesin siap pakai yang sudah disediakan oleh Google yang dikategorikan berdasarkan workload-nya sehingga Anda tinggal memilih nama tipe mesin yang sekiranya sesuai dengan kebutuhan Anda.

Custom Machine types 
Anda dapat membuat VM dengan menentukan sendiri berapa jumlah memori dan vCPU (Virtual CPU) yang dibutuhkan.

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

Selain itu, ada juga Google Kubernetes Engine (GKE) yang merupakan jenis layanan GCP yang memadukan teknologi hybrid. 

Itu artinya, teknologi IaaS dan PaaS digabungkan menjadi sebuah layanan di mana Anda sebagai pengguna dapat mengustomisasi beberapa konfigurasi sesuai yang Anda inginkan, seperti ketersediaan (Availability) dan ketahanan (Reliability) dari server yang dikelola oleh cloud provider.

Terdapat juga Cloud Run yang merupakan layanan yang dapat dengan mudah mengembangkan dan men-deploy aplikasi container di mana pengelolaan infrastruktur dikelola sepenuhnya oleh provider cloud.

Terakhir, ada Cloud Function. Ia merupakan layanan yang memungkinkan Anda untuk menjalankan kode sederhana tanpa memikirkan pengelolaan server.



Jaringan di GCP
Jaringan (Networking) merupakan sistem atau mekanisme sekumpulan perangkat komputasi seperti komputer, server, ataupun perangkat jaringan lain yang saling berkomunikasi melalui media transmisi atau media komunikasi supaya dapat berbagi data antara satu dengan yang lainnya. 

Contoh jaringan adalah Internet, yang menghubungkan jutaan orang di seluruh dunia. 

Perlu Anda ketahui bahwa jaringan Google Cloud Platform terbentuk dari jaringan terbesar milik Google (Google Network) yang tersebar melalui kabel bawah laut dan menghubungkan seluruh benua yang ada di dunia. 

Google memiliki lebih dari 100.000 KM fiber optik dengan 28 regions dan 85 zones yang saling terhubung sehingga antarnegara dan benua di seluruh penjuru dunia dapat saling berkomunikasi dengan lancar nan cepat.



Zones dan Regions
Zone adalah suatu wilayah yang mewakili data center milik Google. Zones merupakan area deployment untuk sumber daya yang ada di GCP yang bertempat di wilayah tertentu dengan keamanan tinggi.

Antar-zone dalam region yang sama berjarak minimal 160 KM dan dihubungkan dengan koneksi super cepat sehingga menghasilkan latensi yang sangat rendah. Nah, sekarang, apa itu region?

Region adalah wilayah geografis yang terdiri dari beberapa zona (zones), tetapi letak setiap zona akan berbeda satu dengan yang lainnya dalam wilayah tersebut. Di GCP, Regions minimal terdiri dari tiga zone yang berbeda dan akan selalu tersedia.


Virtual Private Cloud (VPC)
Virtual Private Cloud (VPC) adalah mekanisme jaringan virtual yang memudahkan Anda untuk bisa berkomunikasi antar-region di GCP. Karena VPC bersifat global, itu artinya Anda dapat mengatur dan mengelola komunikasi secara leluasa mencakup jaringan Google yang tersebar di seluruh dunia.

VPC merupakan solusi pengelolaan jaringan yang lebih mudah dan scalable sehingga Anda dapat menyesuaikan kapasitas jaringan yang bekerja di suatu wilayah.

VPC juga berguna untuk mengisolasi lingkungan jaringan satu sama lain tanpa harus mengelola jaringan fisik seperti kabel data center ataupun routing antarserver secara langsung. Ibarat kata, Anda bisa mengonfigurasi jaringan antarnegara dan antarbenua semudah menjentikkan ibu jari.



Objek-Objek VPC
Network merupakan bentuk abstraksi dari sebuah jaringan yang terhubung satu sama lain di lingkungan GCP. Network di GCP bersifat global yang meliputi semua region yang tersedia di seluruh dunia.
IP (Internet Protocol) Address merupakan alamat virtual yang Anda miliki sebagai identitas saat berkomunikasi di jaringan.
IP address dibagi menjadi dua jenis berdasarkan cakupannya, yakni IP publik dan IP privat.
IP publik merupakan alamat IP yang dapat digunakan untuk mengakses jaringan internet secara global.
IP privat digunakan untuk komunikasi lokal saja. Komunikasi lokal tidak memerlukan internet agar saling terhubung. Alamat IP privat tidak boleh terpublikasi secara global dan tidak akan bisa digunakan untuk tanda pengenal ketika kita berkomunikasi melalui internet sesuai dengan aturan yang dikeluarkan oleh Internet Assigned Number Authority (IANA).
IANA merupakan lembaga yang mengatur pengalokasian alamat IP yang berlaku di seluruh dunia. Untuk aturan pengalokasian dan penggunaan IP privat tertuang dalam RFC 1918 yang menjadi patokan ketika kita ingin membagi lingkungan jaringan lokal yang biasa disebut sebagai mekanisme subnet.
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


