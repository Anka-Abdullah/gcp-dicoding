pay-as-you-go
terdapat juga kesepakatan berdasarkan durasi agar pengguna mendapatkan diskon dengan menggunakan layanan pada jangka waktu tertentu secara terus-menerus. Misalnya, penggunaan yang berkelanjutan (sustained use discounts) atau berkomitmen menggunakan layanan pada periode tertentu seperti satu tahun atau tiga tahun (committed use discounts).

Untuk lebih lengkap produk mana saja yang dapat digunakan secara gratis, silakan kunjungi link berikut ini 
https://cloud.google.com/free.

# Diskon pada GCP
1. _Suistained use discount (SUDs)_ diskon penggunaan berkelanjutan
    diskon otomatis yang diberikan secara spesifik ketika menjalankan sumber daya mesin komputasi tertentu secara terus-menerus pada periode tertentu.

2. _Commited use discount (CUDs)_ diskon penggunaan berkomitmen
    diskon yang di berikan GCP bila menggunakan produk pada jangka waktu 1-3 tahun.

    2 macam CUDs : 
        - spend-based : 
          Spend-based memberikan diskon kepada pengguna sebagai imbalan atas tercapainya minimal penggunaan suatu layanan pada setiap bulannya.

        - resource-based : 
          CUD berbasis sumber daya (resource-based) memberikan diskon sebagai imbalan atas komitmen Anda untuk menjalankan sejumlah sumber daya secara terus-menerus setiap bulannya.

# Cost Breakdown report
menampilkan seberapa banyak budget yang harus dikeluarkan, jumlah diskon, dan total biaya

# Budgets and alerts
membantu Anda untuk mengendalikan biaya pengeluaran dengan menggunakan sistem budgeting (penganggaran). 

fitur Alerts yang berguna untuk mengirim email berisi notifikasi peringatan jika budgets yang telah Anda alokasikan melewati batasan yang telah ditetapkan.

# Quotas
1. kuota sumber daya : 
    banyak sumber daya yang dapat dibuat per project.

2. kuota akses :
    seberapa cepat dapat membuat permintaan API dalam suatu project

3. kuota region :
    Misalnya, secara default, Anda hanya dapat memiliki 24 CPU setiap region. 

##    Rangkuman Pricing dan Billing
Pricing
kita harus memikirkan biaya seefektif mungkin di mana kita lah yang mengontrol pengeluaran dan pembelanjaan anggaran yang kita miliki.

Pricing model (model pembayaran) pada layanan Google Cloud menggunakan mekanisme pay-as-you-go atau tanpa uang muka. Jadi, Anda hanya membayar layanan yang telah digunakan. 

Secara default, biaya layanan di GCP dihitung per menit (per-minutes billing). Semakin lama Anda menggunakan layanannya, akan semakin hemat tagihan biaya yang akan ditagih oleh cloud provider. 

Untuk lebih menghemat pengeluaran, Google Cloud menawarkan produk free tier. Di mana Anda tidak dikenakan biaya untuk menggunakan beberapa produk yang ditawarkan. Namun, beberapa produk ini mempunyai batasan penggunaan atau quotas.

Anda juga dapat menggunakan free trial credit sebesar 300 dolar yang diberikan. Free trial credit hanya diberikan kepada pengguna akun GCP yang telah memenuhi syarat, seperti mendaftarkan akun free tier-nya menggunakan kartu kredit atau debit yang terverifikasi.

Selain itu, terdapat juga kesepakatan berdasarkan durasi agar pengguna mendapatkan diskon dengan menggunakan layanan pada jangka waktu tertentu secara terus-menerus. Misalnya, penggunaan yang berkelanjutan (sustained use discounts) atau berkomitmen menggunakan layanan pada periode tertentu seperti satu tahun atau tiga tahun (committed use discounts).

Free Trial Credit dan Free Tier 
Untuk mendapatkan free trial credit, Anda harus mendaftar akun Google Cloud menggunakan kartu kredit atau debit yang terverifikasi dan dapat digunakan untuk pembayaran internasional. 

Kartu kredit atau debit Anda akan terkena biaya setidaknya satu dolar untuk memverifikasi bahwa kartu Anda aktif dan dapat digunakan untuk pembayaran. Setelah itu, secara virtual Anda akan memiliki credit sebesar 300 dollar yang bisa digunakan untuk menggunakan berbagai layanan GCP selama 90 hari.

Anda benar-benar bisa menggunakan real cloud environment (lingkungan cloud yang nyata) dari GCP, bukan sekadar lingkungan simulasi. 

Selain free trial credit, Anda juga dapat menggunakan produk free tier yang ditawarkan oleh GCP. Lebih dari 20 produk gratis yang bisa Anda pakai, seperti Compute Engine, Cloud Storage, dan BigQuery. Namun, setiap penggunaan layanan tersebut memiliki batasan penggunaan masing-masing setiap bulannya. Bila penggunaan Anda melebihi batasan yang diberikan, Anda masih dapat menggunakannya dengan free trial credit. 

Dengan demikian, free trial credit akan berkurang otomatis ketika penggunaan layanan free tier-nya melebihi batasan yang telah diberikan.

Discounts
Penghematan biaya dalam penggunaan layanan di GCP juga dapat Anda lakukan menggunakan diskon yang melalui sebuah kesepakatan, seperti sustained use discounts (SUDs) ataupun committed use discounts (CUDs). 

Sustained use discounts (SUDs)
Sustained use discounts (SUDs) atau diskon penggunaan berkelanjutan adalah diskon otomatis yang diberikan secara spesifik ketika menjalankan sumber daya mesin komputasi tertentu secara terus-menerus pada periode tertentu.

Diskon ini berlaku ketika Anda memenuhi persyaratan penggunaan suatu resource pada jangka waktu tertentu. Misalnya, Anda telah menggunakan compute engine secara terus menerus selama 7 hari atau selama sebulan, maka Anda akan mendapatkan diskon secara otomatis dari GCP.

Committed use discounts (CUDs)
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