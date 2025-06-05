import { Component, OnInit } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
  expanded: boolean;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit {
  ngOnInit(): void {}

  faqs: FaqItem[] = [
    {
      question: 'Apa saja layanan yang tersedia di Dafina Salon?',
      answer:
        'Kami menyediakan layanan potong rambut, pewarnaan, perawatan wajah, manicure, pedicure, dan make up untuk acara wisuda atau pernikahan.',
      expanded: false,
    },
    {
      question: 'Apakah Dafina Salon menyediakan layanan home service?',
      answer:
        'Ya, kami menyediakan layanan home service untuk area Bukit Cimanggu City Bogor. Layanan ini mencakup potong rambut, perawatan wajah, dan make up. Silakan hubungi kami untuk info jadwal dan biaya tambahan.',
      expanded: false,
    },
    {
      question: 'Apakah Dafina Salon menerima booking online?',
      answer:
        'Ya, kamu bisa melakukan booking online melalui whatsapp kami untuk kenyamananmu.',
      expanded: false,
    },
    {
      question: 'Berapa lama waktu potong rambut di Dafina Salon?',
      answer:
        'Rata-rata potong rambut memakan waktu sekitar 30-45 menit, tergantung jenis potongan.',
      expanded: false,
    },
    {
      question: 'Apakah ada promo khusus untuk pelanggan baru?',
      answer:
        'Ya, kami memberikan diskon 20% untuk pelanggan baru yang melakukan booking pertama kali.',
      expanded: false,
    },
    {
      question:
        'Apakah Dafina Salon menggunakan produk yang aman untuk kulit sensitif?',
      answer:
        'Kami menggunakan produk berkualitas dan aman untuk berbagai jenis kulit, termasuk yang sensitif.',
      expanded: false,
    },
    {
      question:
        'Bisakah saya konsultasi terlebih dahulu sebelum melakukan perawatan?',
      answer:
        'Tentu saja, kami menyediakan sesi konsultasi gratis agar kamu mendapatkan perawatan yang sesuai.',
      expanded: false,
    },
    {
      question: 'Apakah Dafina Salon menyediakan layanan untuk anak-anak?',
      answer:
        'Ya, kami memiliki layanan khusus potong rambut dan perawatan yang ramah anak.',
      expanded: false,
    },
    {
      question: 'Bagaimana cara membatalkan atau mengubah jadwal booking?',
      answer:
        'Kamu bisa membatalkan atau mengubah jadwal booking dengan cara langsung menghubungi ke nomor whatsapp kami.',
      expanded: false,
    },
    {
      question:
        'Apakah Dafina Salon menerima pembayaran dengan kartu kredit atau e-wallet?',
      answer:
        'Kami menerima pembayaran tunai, transfer bank, dan qris untuk e-wallet.',
      expanded: false,
    },
    {
      question:
        'Apakah staf di Dafina Salon sudah berpengalaman dan bersertifikat?',
      answer:
        'ya, staf kami telah dilatih secara profesional dan memiliki sertifikasi di bidang kecantikan dan perawatan.',
      expanded: false,
    },
    {
      question: 'Apakah Dafina Salon cocok untuk muslimah?',
      answer:
        'Tentu! Dafina Salon menyediakan layanan yang ramah muslimah dengan memperhatikan privasi dan kenyamanan serta staf wanita.',
      expanded: false,
    },
  ];

  toggle(index: number) {
    this.faqs[index].expanded = !this.faqs[index].expanded;
  }
}
