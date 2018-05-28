# NodeJS Image File Server
Bu sunucu, Hürriyet'in imaj cdn'lerinde kullandığı, görsellerin url ile boyut ve görsel kalitesinin ayarlandığı yapıyı taklit eden bir imaj sunucusu oluşturur.

## Sunucuyu Başlatmak
Repoyu local'inize çektikten sonra ``` npm install ``` komutu ile gerekli paketlerin yüklenmesini sağlayın.

Ardından sunucuyu başlatmak için ``` npm start ``` komutu kullanılır.
Sunucu varsayılan olarak **8800** portunu dinler.

## Kullanım Örneği
Görsel url'leri şu formatta olmalıdır: ``` http://localhost:8800/i/{anaklasor}/{kalite}/{genislik}x{yukseklik}/{gorselyolu.jpg} ```

Örnek bir url: ``` http://localhost:8800/i/yasam/75/600x400/hayat/guzel-bir-gun.jpg ```

**package.json** içerisindeki **start** komutu varsayılan olarak **hurriyet** klasöründen sunulan görsellerin boyutlandırılmamasını sağlar. Ayrıca klasör adı url'de **statik** ismiyle değiştirilir.

Örneğin ``` http://localhost:8800/i/statik/site/logo.png ```
Bu url ``` /hurriyet/site/logo.png ``` yolundaki görseli sunacaktır.

## Production Aşamasında Kullanımı
__Kullanılmaz!__

Cache özelliği olmadığından **production** ortamında kullanılması aşırı kaynak kullanımına sebep olur! Sadece development kullanımı amacıyla hazırlandı.