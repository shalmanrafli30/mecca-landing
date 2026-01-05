"use client";

import React, {useState} from "react";
import Link from "next/link";
import {GraduationCap, Users, User, BookOpen, Trophy, ArrowRight, Menu, X, CheckCircle2, MapPin, Phone, Mail} from "lucide-react";
import {FaInstagram, FaYoutube, FaFacebook} from "react-icons/fa";

export default function LandingPage() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Konfigurasi Link Portal (Sesuaikan dengan subdomain yang sudah disetup)
	const portals = [
		{
			name: "Portal Siswa",
			role: "Siswa",
			description: "Akses jadwal, nilai, dan materi pembelajaran.",
			icon: User,
			href: "https://student.meccaschool.online",
			color: "bg-blue-600 text-white hover:border-blue-200",
			btnColor: "bg-blue-600 hover:bg-blue-700"
		},
		{
			name: "Portal Guru",
			role: "Guru",
			description: "Kelola kelas, absensi, dan penilaian siswa.",
			icon: GraduationCap,
			href: "https://teacher.meccaschool.online",
			color: "bg-blue-100 text-blue-700 hover:border-blue-200",
			btnColor: "bg-blue-700 hover:bg-blue-800"
		},
		{
			name: "Portal Orang Tua",
			role: "Orang Tua",
			description: "Pantau perkembangan anak dan administrasi.",
			icon: Users,
			href: "https://parent.meccaschool.online",
			color: "bg-emerald-50 text-emerald-600 hover:border-emerald-200",
			btnColor: "bg-emerald-600 hover:bg-emerald-700"
		}
	];

	return (
		<div className="min-h-screen bg-white font-sans text-gray-900">
			{/* --- NAVBAR --- */}
			<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-20">
						{/* Logo */}
						<div className="flex items-center gap-2">
							<div className="bg-indigo-600 p-2 rounded-lg">
								<BookOpen className="w-6 h-6 text-white" />
							</div>
							<span className="text-xl font-bold tracking-tight">
								Mecca<span className="text-indigo-600">School</span>
							</span>
						</div>

						{/* Desktop Menu */}
						<div className="hidden md:flex space-x-8 items-center">
							<a href="#beranda" className="text-gray-500 hover:text-indigo-600 font-medium transition">
								Beranda
							</a>
							<a href="#portal" className="text-gray-500 hover:text-indigo-600 font-medium transition">
								Akses Portal
							</a>
							<a href="#tentang" className="text-gray-500 hover:text-indigo-600 font-medium transition">
								Tentang Kami
							</a>
							<a href="#kontak" className="text-gray-500 hover:text-indigo-600 font-medium transition">
								Kontak
							</a>
							{/* <Link href="https://student.meccaschool.online/login" className="bg-indigo-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
								Daftar Sekarang
							</Link> */}
						</div>

						{/* Mobile Menu Button */}
						<div className="md:hidden">
							<button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 p-2">
								{isMobileMenuOpen ? <X /> : <Menu />}
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Dropdown */}
				{isMobileMenuOpen && (
					<div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-xl absolute w-full">
						<a href="#beranda" className="block text-gray-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
							Beranda
						</a>
						<a href="#portal" className="block text-gray-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
							Akses Portal
						</a>
						<a href="#tentang" className="block text-gray-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
							Tentang Kami
						</a>
						<a href="#kontak" className="block text-gray-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
							Kontak
						</a>
					</div>
				)}
			</nav>

			{/* --- HERO SECTION --- */}
			<section id="beranda" className="pt-28 pb-20 lg:pt-32 lg:pb-32 px-4 relative overflow-hidden">
				<div className="absolute top-0 right-0 -z-10 opacity-10">
					<div className="w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl translate-x-1/2 -translate-y-1/2"></div>
				</div>
				<div className="absolute bottom-0 left-0 -z-10 opacity-10">
					<div className="w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl -translate-x-1/2 translate-y-1/2"></div>
				</div>

				<div className="max-w-7xl mx-auto text-center">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-semibold text-sm mb-6 border border-indigo-100">
						<Trophy className="w-4 h-4" /> Sekolah Penggerak Berprestasi
					</div>
					<h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
						Mewujudkan Generasi <br />
						<span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-emerald-500">Maju & Berteknologi</span>
					</h1>
					{/* <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">Mecca School mengintegrasikan kurikulum Islam terpadu dengan teknologi modern untuk mencetak pemimpin masa depan yang berakhlak mulia dan kompeten.</p> */}
					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<a href="#portal" className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition shadow-xl shadow-indigo-200 flex items-center justify-center">
							Masuk Portal <ArrowRight className="ml-2 w-5 h-5" />
						</a>
						<a href="#tentang" className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold text-lg hover:bg-gray-50 transition flex items-center justify-center">
							Pelajari Lebih Lanjut
						</a>
					</div>

					{/* Stats */}
					<div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-gray-100 pt-10">
						<div>
							<p className="text-3xl font-bold text-gray-900">1.2k+</p>
							<p className="text-sm text-gray-500">Siswa Aktif</p>
						</div>
						<div>
							<p className="text-3xl font-bold text-gray-900">80+</p>
							<p className="text-sm text-gray-500">Guru Profesional</p>
						</div>
						<div>
							<p className="text-3xl font-bold text-gray-900">100%</p>
							<p className="text-sm text-gray-500">Lulusan Terbaik</p>
						</div>
						<div>
							<p className="text-3xl font-bold text-gray-900">A</p>
							<p className="text-sm text-gray-500">Akreditasi</p>
						</div>
					</div>
				</div>
			</section>

			{/* --- PORTAL HUB SECTION --- */}
			<section id="portal" className="py-24 bg-gray-50 relative">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Akses Portal Terpadu</h2>
						<p className="text-gray-500 max-w-xl mx-auto">Satu pintu masuk untuk seluruh civitas akademika. Silakan pilih portal sesuai dengan peran Anda.</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{portals.map((portal, idx) => {
							const Icon = portal.icon;
							return (
								<Link href={portal.href} key={idx} className={`group p-8 rounded-2xl border border-transparent hover:border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden`}>
									<div className={`p-4 rounded-2xl mb-6 ${portal.color} transition-transform group-hover:scale-110 duration-300`}>
										<Icon className="w-8 h-8" />
									</div>
									<h3 className="text-xl font-bold text-gray-800 mb-2">{portal.name}</h3>
									<p className="text-sm text-gray-500 mb-6 leading-relaxed">{portal.description}</p>

									<span className={`w-full py-2.5 rounded-lg text-white font-medium text-sm transition-colors ${portal.btnColor}`}>Login {portal.role}</span>
								</Link>
							);
						})}
					</div>
				</div>
			</section>

			{/* --- ABOUT / FEATURES SECTION --- */}
			<section id="tentang" className="py-24">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<div className="relative">
							<div className="absolute -top-4 -left-4 w-24 h-24 bg-dots-pattern opacity-20"></div>
							<div className="bg-gray-100 rounded-3xl h-125 w-full flex items-center justify-center overflow-hidden relative shadow-2xl">
								{/* Placeholder Image */}
								<div className="absolute inset-0 bg-linear-to-tr from-indigo-500 to-purple-600 opacity-90"></div>
								<BookOpen className="w-32 h-32 text-white/20 relative z-10" />
								<p className="absolute bottom-8 left-8 text-white font-bold text-2xl max-w-xs z-10">&quot;Pendidikan adalah senjata paling mematikan untuk mengubah dunia.&quot;</p>
							</div>
						</div>

						<div>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Mengapa Memilih Mecca School?</h2>
							<p className="text-gray-500 text-lg mb-8 leading-relaxed">Kami berkomitmen memberikan pendidikan holistik yang menyeimbangkan kecerdasan intelektual, emosional, dan spiritual.</p>

							<div className="space-y-6">
								{[
									{title: "Kurikulum Terintegrasi", desc: "Memadukan kurikulum nasional dengan nilai-nilai keislaman yang kuat."},
									{title: "Fasilitas Modern", desc: "Laboratorium lengkap, perpustakaan digital, dan ruang kelas ber-AC."},
									{title: "Sistem Digital (Smart School)", desc: "Pemantauan nilai, absensi, dan keuangan secara real-time melalui aplikasi."}
								].map((item, idx) => (
									<div key={idx} className="flex gap-4">
										<div className="mt-1">
											<CheckCircle2 className="w-6 h-6 text-emerald-500" />
										</div>
										<div>
											<h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
											<p className="text-gray-500 mt-1">{item.desc}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* --- FOOTER --- */}
			<footer id="kontak" className="bg-slate-900 text-slate-300 py-10 border-t border-slate-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
						<div className="col-span-1 md:col-span-2">
							<div className="flex items-center gap-2 mb-4">
								<BookOpen className="w-6 h-6 text-indigo-400" />
								<span className="text-xl font-bold text-white tracking-tight">
									Mecca<span className="text-indigo-400">School</span>
								</span>
							</div>
							<p className="text-sm leading-relaxed max-w-sm mb-6 text-slate-400">Lembaga pendidikan unggulan yang berfokus pada pembentukan karakter islami dan prestasi akademik siswa untuk masa depan yang gemilang.</p>
							<div className="flex gap-4">
								{/* Social Icons Placeholder */}
								<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition cursor-pointer text-lg">
									<FaYoutube />
								</div>
								<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition cursor-pointer text-lg">
									<FaInstagram />
								</div>
								<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition cursor-pointer text-lg">
									<FaFacebook />
								</div>
							</div>
						</div>

						<div>
							<h4 className="text-white font-bold mb-4">Akses Cepat</h4>
							<ul className="space-y-2 text-sm">
								<li>
									<a href="#beranda" className="hover:text-indigo-400 transition">
										Beranda
									</a>
								</li>
								<li>
									<a href="#portal" className="hover:text-indigo-400 transition">
										Portal Login
									</a>
								</li>
								<li>
									<a href="#tentang" className="hover:text-indigo-400 transition">
										Tentang Kami
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-indigo-400 transition">
										Penerimaan Siswa Baru
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="text-white font-bold mb-4">Hubungi Kami</h4>
							<ul className="space-y-3 text-sm">
								<li className="flex items-start">
									<MapPin className="w-5 h-5 mr-3 text-indigo-400 shrink-0" />
									<span>
										Jl. Soekarno Hatta No. 123,
										<br />
										Bandung, Jawa Barat
									</span>
								</li>
								<li className="flex items-center">
									<Phone className="w-5 h-5 mr-3 text-indigo-400 shrink-0" />
									<span>(022) 123-4567</span>
								</li>
								<li className="flex items-center">
									<Mail className="w-5 h-5 mr-3 text-indigo-400 shrink-0" />
									<span>info@meccaschool.online</span>
								</li>
							</ul>
						</div>
					</div>

					<div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">&copy; {new Date().getFullYear()} Mecca School System. All rights reserved. Built with ❤️ by Mecca School IT Team.</div>
				</div>
			</footer>
		</div>
	);
}
