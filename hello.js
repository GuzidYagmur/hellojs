//console.log("Hello world");
//console.clear();
//console.log("Merhaba Dünya");



//const name = "furkan" sonrasinda degistirilemeyecek degiskenler icin
//let isimcik = "furkan" sonradan degistirilebilir


// Degisken tanimlama kurallari
// Degisken isimleri sayi ile baslayamaz ama sayi ile bitebilir 1degisken - degisken 1
// degisken isimlerinde türkce karakter veya bosluk olamaz
// degisken1 degisken2 degisken3 diye degisken tanimlamasi yapma kodun okunurlugu azalir
// anlamini ya da görevini tasiyan bir isim verilmeli

//prompt("") kullanıcıdan input alır
//alert("hosgeldiniz") kullaniciya sadece bu outputu cikartir
// confirm("emin misin?") kullaniciya evet ya da hayir sorusu sorar

// console.log("Merhaba" + "" + prompt("Adınız nedir?")+ prompt("soyadiniz nedir"));
// const ad = prompt("Adınız nedir?");
// const soyad = prompt("Soyadiniz nedir?");

// const mesaj = "merhaba" + " " + ad + " "+ soyad
// alert(mesaj);
// console.log(mesaj)

// const dogumYili = prompt("doğum yilinizi girin");
// console.log(2024 - Number(dogumYili));
// Tip dönüsümleri - int to string string to int int to float

// const yas = 25;
// const metinselYas = yas.toString();
// console.log(typeof metinselYas);
 

// const metin = "Benim adım Yağmur Başaran";
// console.log(metin.length);
// let text = "Yağmur Başaran";
// let part = text.slice(-12);
// console.log(part);

// const metin1 = "YaGmUr BaSArAn";
// let metin2 = metin1.toUpperCase();
// console.log(metin2);
// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);
// console.log(text3);

// let text = "       Hello     ";
// console.log( text.trimEnd());

// const sayi = 5;
// const sayiCevirMetin = sayi.toString();
// console.log(sayiCevirMetin.padStart(5,"0"));


// const metin = "Hello Yagmur ";
// console.log(metin.repeat(5)); // repeat metni içindeki sayı kadar tekrar yazdırır

// const metin = "Please visit Microsoft";
// const donusturulmusMetin = metin.replace("w","M");
// console.log(donusturulmusMetin); // metindeki ilk gördüğü w harfini  büyük M harfiyle değiştirir


// const metin = "Please visit Microsoft";
// const donusturulmusMetin = metin.replaceall("w","M");
// console.log(donusturulmusMetin);  // metindeki gördüğü tüm küçük w harflerini büyük m ile değiştirir


// const metin = ("Merhaba ben Furkan Özay 25 yaşındayım");
// const metin1 = ("Merhaba,ben,Furkan,Özay,25,yaşındayım");
// const metin2= ("Merhaba-ben-Furkan-Özay-25-yaşındayım");
// console.log(metin.split(" "));
// console.log(metin1.split(","));
// console.log(metin2.split("-"));


// const yas = 25;

// console.log(typeof yas);
// const metinselYas = yas.toString();

// console.log(typeof metinselYas);

// Merhaba {ad} {soyad}, yaşınız {yas}

//  const ad = prompt("Adınız nedir?");
//  const soyad = prompt("Soyadınız nedir?");
//  const dogumYili = prompt("Doğum yılınız nedir?");
//  const mevcutYil = 2024;
//  const yas = mevcutYil - Number(dogumYili);
//const mesaj = "Merhaba " + ad + " " + soyad + ", yaşiniz " + yas;

// alert(mesaj);
// console.log(mesaj);


// const metin = "benim adım name";

// console.log(metin.length);

// metin.substring();
// metin.substr()

// const metin = "                Hello         World                    ";

// console.log(metin.trim());
// console.log(metin.trimStart());
// console.log(metin.trimEnd());

// const sayi = 5;

// const sayiCevirMetin = sayi.toString();

// console.log(sayiCevirMetin.padStart(5, "0"));
// console.log(sayiCevirMetin.padEnd(5, "0"));


// const metin = "Please visit wicrosoft!";

// const donusturulenMetin = metin.replace("w", "M");

// const hersesiyleDonusturulmusMetin = metin.replaceAll("i", "e");


// const metin = "Merhaba ben Furkan Özay 25 yaşındayım";
// const metin1 = "Merhaba,ben,Furkan,Özay,25,yaşındayım";
// const metin2 = "Merhaba-ben-Furkan-Özay-25-yaşındayım";
// const metin3 = "Merhaba ben Furkan Özay 25 yaşındayım";

// console.log(metin.split(" "));
// console.log(metin1.split(","));
// console.log(metin2.split("-"));
// console.log(metin3.split(""));

//*********************************************************************



// String Interpolation

// 26 KASIM
 
//String Interpolation
// const name= "Furkan";
// const surname = "Özay";
// const age= 25;

//const mesaj = "Merhaba ben" + name + " "+ "surname" + "," + age + "yasindayim";
//const mesaj = `Merhaba ben ${name} ${surname}, ${age} yasindayim`; // bütüm dillerde bu olaya string interpolation denir 
// js dilinfr string interpolation kullanimi icin template literal sablonunu kullaniriz
//console.log(mesaj);


//ORTALAMA HESAPLAMA

// let not1 = Number(prompt("birinci sinav notunu giriniz: "));
// let not2 = Number(prompt("ikinci sinav notunu giriniz: "));
// let not3 = Number(prompt("üçüncü sinav notunu giriniz"));


// if(not1>100){
//     not1 = 0;
// }
// if(not2>100){
//     not2 = 0;
// }
// if(not3>100){
//     not3 = 0;
// }
// let ort = ((not1 + not2+ not3)/3);


// if(ort>=90){
//     alert("Notunuz AA");
// }
// else if(ort>=80){
//     alert("Notunuz BB");

// }
// else if(ort>=70){
//     alert("notunuz CC");
// }
// else if(ort>=60){
//     alert("notunuz DD");
// }
// else{
//     alert("notunuz FF");
// }


// const name = "furkan";
// const surname = "özay";
// const age =25;
// const role = "instructor ";

// const isStudent= role=="student";

// if(isStudent){
//     console.log("evet ögrencidir.");
    
// }
// else{
//     console.log("Hayır öğrenci değildir.")
// }
 
// const ad = prompt("adiniz nedir?");
// const soyad = prompt("soyadiniz nedir?");
// const dogumYili = prompt("doğum yilinizi girin");
// const mevcutYil = 2024;
// const yas = 2024- Number(dogumYili);
// const cinsiyet = prompt("cinsiyetiniz nedir?").toLocaleLowerCase("tr");

// if(yas>=20 && cinsiyet==="erkek"){
//     console.log(`Merhaba ${ad} ${soyad} askerliginiz geldi`);
    
// }
// else if(cinsiyet==="erkek"){
//     console.log(`Merhaba ${ad} ${soyad} askerliginiz gelmedi`);
// }
// else{
//     console.log(`Merhaba ${ad} ${soyad} Askerliginiz bulunmuyor`);
// }

//*** DÖNGÜLER***
//FOR-FOROF-FORin
//while & do while

// metin iste sonra da sorgulatmak istediği harfi sor söylesin sen de kaç tane olduğunu syle
//hikayeli oyun
//kelime tahmin oyunu- bir değişkenle bir kelime belirle sonra kllanıcıya deneme hakkı belirle kelime tahmini doğruysa devam et yanlışsa hakkından bir tane düşür  








