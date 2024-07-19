// console.log("******FOR*******")


// for(let i=0; i<5; i++){

//     const grade=prompt(`Enter ${i} Gerade`)
//     let sum=sum+gerade
    
// }

// console.log(i)

// function selamla(){
//     console.log(`merhaba nasılsınız`)
// }

// selamla()
// selamla()
// selamla()

// function yazdır(name,soyad="güven",yas="56566"){
//     console.log("merhaba", name,soyad,yas)
// }

// yazdır("ali")
// let soyisim="çolak"
// yazdır(soyisim)
// let sayı=250
// yazdır(sayı)
// yazdır("ali",45)
// yazdır("ayşe","colak",58)

// function değerler(){
//     console.log(arguments  )
// }
// değerler(56,56,89,78,15,58,46,79,80,95,898)   

// function yasHesapla(isim,tarih){
//     console.log( "benim adım",isim, "ben",(2024-tarih),"yaşındayım");
//     let yas=2024-tarih
   
//     if(yas>40){
//         return "yas 40 dan büyük"
//     }
//     else{
//         return "yas 40 dan küçüktür"
//     }
// }

// const yas=yasHesapla("ali",1990)
// const ayseYas=yasHesapla("ayşe",1896)

// console.log(yas);
// console.log(ayseYas);

// console.clear()

// function AlanHesapla(r,pi){
//     console.log(r,pi)
   

//     let alan= (2*pi)*r
//     return alan;
// }

// let cap= +prompt("lütfen dareinin yarı çapını giriniz")
// let pi=+prompt("lütfen pi sayısını giriniz")
 
//     const hesap=AlanHesapla(cap,pi)
// console.log(hesap.toFixed(2));


// function AlanHesapla(r){
//     return Math.PI*(r**2);
// }
// let cap=+prompt("lütfen darenin yarcapını giriniz")
// let hesap=AlanHesapla(cap)
// console.log(hesap.toFixed(1))

//Bir ülkedeki ortalama yaşam ömrü 95 yıl olduğuna göre,
// doğum yılı girilen kişinin yaşını hesaplattıran
// yaşına göre ortalama ... ömrünüz kaldı yazıp önerilerde bulunan program
// 0-10 : " Sen bu değerleri önemseme hayatın tadını çıkar"
// 10-20 : " Gezmek görmek istediğin yerler varsa yola çıkma zamanı.. "

// function leben(yas) {
//     let hesap = 95 - (new Date().getFullYear() - yas);
  
//     if (hesap > 0 && hesap < 10) {
//         return "Sen bu değerleri önemseme hayatın tadını çıkar";
//     } else if (hesap >= 10 && hesap < 20) {
//         return "Gezmek görmek istediğin yerler varsa yola çıkma zamanı..";
//     } else if (hesap >= 20) {
//         return "Hayatın her döneminde yeni keşifler seni bekliyor.";
//     } else {
//         return "Belirli bir yaş aralığında değilsiniz.";
//     }
// }

// const son = leben(1991);
// console.log(son);

// tion
// // function yasHesapla(isim,tarih){
//     //     console.log( "benim adım",isim, "ben",(2024-tarih),"yaşındayım");
//     //     let yas=2024-tarih
       
//     //     if(yas>40){
//     //         return "yas 40 dan büyük"
//     //     }
//     //     else{
//     //         return "yas 40 dan küçüktür"
//     //     }
//     // }
    
//     // const yas=yasHesapla("ali",1990)
// function functionWithArgs(num1,num2){
//     console.log(num1,num2);
//      return num1+num2;
//    } 
//  let age=functionWithArgs(1,2)
//  let num=functionWithArgs(7,9)
//  console.log(age);
//  console.log(num);
 

// let cümle="biz bu işi çok iyi yapıyoruz..."
// let harf=prompt("bir harf giriniz")

// function bulma(harf){
//     sum=0
//     for(let i=0; cümle.length;i++)
//         if(cümle.charAt(i)===harf)
//             sum++;
//         return sum;

// }

// let sonuc=bulma(harf);
// console.log(sonuc)


// const topla= (s1,s2)=>(s1+s2)

// console.log(topla(2,3))

// const sum=(s1,s2)=>{
//     return s1+s2
// }


// console.log(sum(2,3));

// const kareAl=(x)=>x*x
// console.log(kareAl(8))

// const yasHesapla=(yil)=> new Date().getFullYear()-(yil);

// const yil=+prompt("Lütfen doğum yılınızı giriniz");

// console.log(`Yaşınız ${yasHesapla(yil)}'dır`);


// ürünlere indirim uygulama

// const urunler = [
//     { fiyat: 100, indirim: 0.2 },
//     { fiyat: 200, indirim: 0.15 },
//     { fiyat: 150, indirim: 0.1 },
//   ];

// //   [80, 170, 135]

// const ürünler=(s1,s2,s3)=> {
//     s1-=s1*0.2;
//     s2-=s2*0.15;
//     s3-=s3*0.1
//     return [s1,s2,s3]

// }

// console.log(ürünler(100,200,150))

//hesap makinası yapımı

// const topla= (s1,s2)=>s1+s2;
// const cikar= (s1,s2) => s1-s2;
// const bol = (s1,s2) => s1/s2;
// const carp = (s1,s2) => s1*s2

// const hesapla= (num1,num2,op) => {
//     let sonuç=0;

//     switch(op){

//         case"+":
//         sonuç=topla(num1,num2);
//         break;

//         case"-":
//         sonuç=cikar(num1,num2);
//         break;

//         case"/":
//         sonuç=bol(num1,num2);
//         break;

//         case"*":
//         sonuç=carp(num1,num2);
//         break;

// default:
//     alert("yanlış işlem ");
//     break;
//     }



//     return sonuç;
// }

// const num1= +prompt("bir sayı giriniz");
// const num2= +prompt("2.  sayıyı  giriniz");
// const op = prompt("Bir işlem seçiniz (+, -, *, /)");

// sonuç=hesapla(num1,num2,op);
// console.log(`Sonuç: ${sonuç}`);


//ARROW FUNT

// const selamla=()=> console.log("merhaba");

// const kontol=(num) =>{
//     return num%3===0 ? "3 tam böleni" : "3 tam böleni değil"
  
// }

// console.log(kontol(8))


// const yarıcap=(pi,r,h)=> pi*(r**2)*h;

// console.log(yarıcap(3.14,5,8));
   

// const sum=(a,b)=> a>b ? " en büyük a": "en büyük b"


// console.log (sum(5,8))


//GİRİLEN N. TERİMDEKİ FİBONACCİ SAYISINI YAZDIRAN BİR FONKSİYON YAZALIM


// (function(a,b){
//     let üsAl=a**b
//     console.log(üsAl)
// })(8,10);


// // örnek

// const areaOfRectangle=(a,b)=> (a*b)

// console.log(areaOfRectangle(5,8))

// // örnek2

// const cevre=(a,b)=> 2*(a+b);

// console.log(cevre(5,8))

// let date= "10.07.2024"
// let newDate= date.split(".").join("/");
// console.log(newDate);


// let sent= "oku da adam ol"

// let newcümle= sent.split(" ").reverse().join(" ")

// console.log(newcümle);0

// let cümle= prompt("lütfen bir kelime giriniz?")

// let tersten= cümle.split("").reverse().join("")

// cümle===tersten? console.log("girilen kelime polindromdur"): console.log("girilen kelime polindrom değildir");


// örnek

// const maaslar=[50000,35000,120000,44000];

// let sum =0;
// for(let i=0; i<maaslar.length; i++) {
//     sum+=maaslar[i];
// }
// console.log("sum",sum);


// örnek:
// notla rdizisindeki notların 50den büyük olanları ve küçük olanları ayrı ayrı diziye atayalım

//  const notlar1= [50, 45, 60, 90, 25, 10, 56, 62,5];
// const kücük=[];
// const büyük=[];

// for(let i in notlar1){
//     notlar1[i]<50 ? kücük.push(notlar1[i]) : büyük.push(notlar1[i])
// }

// console.log(kücük);
// console.log(büyük);

// const salary= [500000,35000,12500,44400];
// let total=0;
// for(let i in salary){
//     total+=salary[i]
// }

// const average= total/salary.length;
// console.log(average);

// const notlar2=[50,45,67,47,89,10];
// const kücük=[];
// const büyük=[];

// for(let not of notlar2){
//     notlar2[not]<50 ? kücük.push(notlar2[not]) : büyük.push(notlar2[not])
// }
