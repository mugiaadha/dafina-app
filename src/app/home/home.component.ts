import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  emailOrPhone: any;
  constructor(private userService: UserService) {}

  testimonials = [
    {
      name: 'ulasan dari Google Maps',
      text: 'Memuaskan di dandanin disini ...kaka ain nya baik cantik gak nyesel perawatan dan make up di davina salon😍😍',
    },
    {
      name: 'ulasan dari Google Maps',
      text: 'susah nyari salon murah, nyaman, hasil ok keren di tengah kota tuh. Ternyata dafina salon jawaban nya. cuss BCC area, taman yasmin. pokoknya bogor barat kuduuu bgt cobain n repeat..',
    },
    {
      name: 'ulasan dari Google Maps',
      text: 'Kedua kalinya kesini. Jauh-jauh dari Jakarta ke Bogor cuma pengen coloring di Dafina Salon. Karena apa, karena hasilnya ga bikin kapok gaiiis... Sesuai dengan ekspektasi tapiii dengan harga dan treatment yang sangan amat bersahabat. Kak Erika te o pe deh Sukses selalu yaaaa Sorry ga post fotonya karena saya berhijab ☺️',
    },
    {
      name: 'ulasan dari Google Maps',
      text: 'langganan smoothing d sni,hasilnya bikin terharu krn sebgaus itu dan harganya maa shaa allah bersahabat bgt,,mna yg treatmen n ownernya baik hati bgt...mksh yah dafina salon....luv bgt❤️🥰',
    },
    {
      name: 'ulasan dari Google Maps',
      text: '2x di smooting di sini saya suka banget sama hasilnya, dan hemat di kantong hihihi, terima kasih Davina Salon',
    },
    {
      name: 'ulasan dari Google Maps',
      text: 'Udah jadi langganan,selain dekat rumah service nya ok,hasil memuaskan&harga ramah dikantong..sukses terus Dafina Salon👍❤️',
    },
    {
      name: 'ulasan dari Google Maps',
      text: 'Enak bgt salon dafina ini aku langganan sama anak ku dan sobibku 😘 mulai dr potong rambut...facial ..cat rambut.. creambath...sampai make up semua dah pasti ga meragukan..nuhun ya dafina salon emang the best dan recommended pisan 👍🏻👍🏻',
    },
    {
      name: 'ulasan dari Google Maps',
      text: 'Alhamdulillah hari ini bisa treatment D dafina salon... Sangat puas bikin rileks n pelayanan nya Oke banget 👍',
    },
    {
      name: 'ulasan dari Google Maps',
      text: 'Enak n nyaman banget treatmen di dafina salon,yuu dicoba pasti ketagihan ....',
    },
    {
      name: 'ulasan dari Google Maps',
      text: 'Suka bgt sama potongan rambut aku, apalagi owner nya cantik dan ramah bgt, dan yang terpenting harganya yg sangat ramah dikantong:) bakal balik lagi dan lagi sih pastinya',
    },
    {
      name: 'ulasan dari Google Maps',
      text: 'Udah berkali kali ngecet rambut disini. Dan hasilnya selalu puasssss💘',
    },
    {
      name: 'ulasan dari Google Maps',
      text: 'Bbrp bulan lalu treatment disini, maaf baru testimoni. Sy kesini sama anak, suka banget. Pelayanan ok, hasilnya baguusss... tapi sayang hrs janjian dulu, biar bisa kesini.. Hiks',
    },
    {
      name: 'ulasan dari Google Maps',
      text: 'suka banget sama hasil smoothing nya,, bakal balik dan balik lagi nih,, pelayananya juga ok banget🥰',
    },
    {
      name: 'ulasan dari Google Maps',
      text: 'Barusan bangett potong sesuai weh sama yang gua mau, udh gitu deket rumah lagii ramah jugaa teteh nyaa, rapi potongannya, bener2 memastikan rambut kita tuh potongan nya sesuai sama yang kita mau, recomend cuyy',
    },
    {
      name: 'ulasan dari Google Maps',
      text: 'Sudah dua kali potong rambut disini. Baguss bgtt hasilnya sesuai keinginan. Mbanya juga perfeksionis & detail. Ngerti model2 jaman skrg dan ga asal potong aja. Bentuknya masih keliatan bahkan stlh rambutnya tumbuh. Recommended for allll 🫶🏻🔥💖',
    },
    {
      name: 'ulasan dari Google Maps',
      text: 'Sudah berulang kali kemari selalu memuaskan, sukses terus mbak karin❤️',
    },
    {
      name: 'ulasan dari Google Maps',
      text: 'Terima kasih mbaa udah potongin rambut akuu😍 mbanya baik bgt dan ramah❤️',
    },
  ];

  ngOnInit(): void {}

  subscribe() {
    this.userService.createUser({ email: this.emailOrPhone }).subscribe({
      next: (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Terima kasih telah berlangganan!',
        });
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Gagal Berlangganan',
          text: 'Terjadi kesalahan saat proses berlangganan. Silakan coba lagi nanti, mungkin besok bisa :)',
        });
      },
    });
  }
}
