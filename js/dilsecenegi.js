
$(document).ready(function() {

    var arrLang={
        
        'tr':{

            'başlık':'RCHesapla',
            'altaçıklama':'Kişisel kazım gücünü hesapla!',
            'kazımbilgisi':'📝 ROLLERCOIN KAZIM BİLGİLERİNİZ',
            'ağgücü':' Ağ Gücü',
            'kazımgücü':' Kazım Gücü',
            'bloködülü':' Blok Ödülü',
            'bloksüresi':' Blok Süresi',
            'haftalıködül':' Haftalık Ödül',
            'k-açıklama':' Kazım bilgilerini doğru girdiğiniz durumda hesaplama işlemini yapabilirsiniz.',
            'hesapla':'Hesapla',
            'istatistikbaşlık':'🧮 KAZANÇ İSTATİSTİKLERİ',
            'beklenen':"Beklenen",
			'günlük':'Günlük',
			'haftalık':'Haftalık',
			'aylık':'Aylık',
			'yıllık':'Yıllık',
            'satoshidönüştür':"➾ SATOSHI'yi, BITCOIN'e DÖNÜŞTÜR",
            's-açıklama':' BTC,ye dönüştür ne kadar kazandığını öğren.'
 


        },


        'en':{
            'başlık':'RCCalculate',
            'altaçıklama':'Calculate your personal digging power!',
            'kazımbilgisi':'📝 ROLLERCOIN EXCAVATION INFORMATION',
            'ağgücü':' Network Power',
            'kazımgücü':' Excavation Power',
            'bloködülü':' Block Reward',
            'bloksüresi':' Block Duration',
            'haftalıködül':' Weekly Reward',
            'k-açıklama':' If you enter the information correctly, you can make the correct calculation.',
            'hesapla':'Calculate',
            'istatistikbaşlık':'🧮 EARNING STATS',
            'beklenen':'Expected',
			'günlük':'Daily',
			'haftalık':'Weekly',
			'aylık':'Monthly',
			'yıllık':'Yearly',
            'satoshidönüştür':'➾ CONVERT SATOSHI TO BITCOIN',
            's-açıklama':' Convert to BTC and find out how much you earn.'
        },
        
        
    };


    
$('.dropdown-item').click(function() {
    localStorage.setItem('dil', JSON.stringify($(this).attr('id'))); 
    location.reload();
  });

    var lang =JSON.parse(localStorage.getItem('dil'));

    if(lang=="en"){
        $("#drop_yazı").html("English");
    }
    else{
        $("#drop_yazı").html("Türkçe");

    }

    $('a,h5,p,h1,h2,span,li,button,h3,label,h6,td').each(function(index,element) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    
  });

});
   