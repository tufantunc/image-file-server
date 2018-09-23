# NodeJS Image File Server
Bu sunucu, Hürriyet'in imaj CDN'inde kullandığı, görsellerin url ile boyut ve görsel kalitesinin ayarlandığı yapıyı (realtime image optimization CDN) taklit eden bir imaj sunucusu oluşturur.

## Amacı
New York Times, Washington Post, Hürriyet gibi yoğun trafikli haber sitelerinin kullandığı görsel optimizasyon yapısını geliştirme ortamında taklit etmek. Bu sayede geliştirme sürecini hızlandırmayı planlıyor.

Örnek url'ler:

NY Times: https://static01.nyt.com/images/2018/09/23/us/23kavanaugh-1/merlin_143378538_c8597935-70ce-4e4d-8ce4-f5e500d667ab-threeByTwoLargeAt2X.jpg?**quality=75**&auto=webp&disable=upscale&**width=1620**

Washinton Post: https://www.washingtonpost.com/resizer/5NZcol6Lxd0CKixi0bXZLxQwGsc=/**1248x832**/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/46R2T3E2JII6RKGYTNGBGKDNNM.jpg

Hürriyet: http://i.hurimg.com/i/hurriyet/**75**/**900x350**/5ba7b6e218c7731718ce6f13.jpg

URL'lerdeki kalınla işaretli alanlar 

## Sunucuyu Başlatmak
Repoyu local'inize çektikten sonra ` npm install ` komutu ile gerekli paketlerin yüklenmesini sağlayın.

Ardından sunucuyu başlatmak için ` npm start ` komutu kullanılır.
Sunucu varsayılan olarak **8800** portunu dinler.

## Kullanım Örneği
Görsel url'leri şu formatta olmalıdır: ` http://localhost:8800/i/{anaklasor}/{kalite}/{genislik}x{yukseklik}/{gorselyolu.jpg} `

Örnek url'i tarayıcınızda deneyin: ` http://localhost:8800/i/demo/75/600x400/kapadokya/balonlar.jpg `
Orjinal boyutu 5MB ve 6000x4000px olan dosyanın %75 kalite ve 600x400px boyutlarıyla geldiğini göreceksiniz.

**package.json** içerisindeki **start** komutu varsayılan olarak **hurriyet** klasöründen sunulan görsellerin boyutlandırılmamasını sağlar. Ayrıca klasör adı url'de **statik** ismiyle değiştirilir.

Örneğin ` http://localhost:8800/i/statik/site/logo.png `
Bu url ` /hurriyet/site/logo.png ` yolundaki görseli sunacaktır.

## Production Aşamasında Kullanımı
__Lütfen production ortamında kullanmayın!__

Cache özelliği olmadığından **production** ortamında kullanılması aşırı kaynak kullanımına sebep olur! Sadece geliştirme aşamasında kullanımak üzere  hazırlandı.

## Görsel Telifi
Demo için eklenen fotoğraf [Mesut Kaya](https://unsplash.com/photos/eOcyhe5-9sQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)'ya ait.