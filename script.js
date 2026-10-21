const dataCafe = {
    yotta: {
        nama: "Yotta Majene",
        menu: [
            {
                nama: "Dark Cokelat",
                gambar: "images/Dark coklat.jpg"
            },
            {
                nama: "Matcha Latte",
                gambar: "images/matcha latte.jpg"
            },
            {
                nama: "Es Kopi Susu",
                gambar: "images/kopi susu.jpg"
            },
            {
                nama: "Jus Buah",
                gambar: "images/juz buah.jpg"
            },
            {
                nama: "Thai Tea",
                gambar: "images/thai tea.jpg"
            },
            {
                nama: "Red Velvet",
                gambar: "images/red velvet.jpg"
            }
        ],
        foto: [
            "images/yotta.jpg",
            "images/yotta1.jpg",
            "images/yotta2.jpg"
        ]
    },

   olang: {
        nama: "Olang Mesa",
        menu: [
            {
                nama: "nasi goreng jakarta",
                gambar: "images/nasgor.jpg"
            },
            {
                nama: "ayam rica-rica",
                gambar: "images/ayam rica.jpg"
            },
            {
                nama: "mie titie",
                gambar: "images/mie titi.jpg"
            }
        ],
        foto: [
            "images/olang1.jpg",
            "images/olang2.jpg",
            "images/olang3.jpg",
        ]
    },

   maio: {
    nama: "MAIO Coffee & Eatery",
    menu: [
        {
            nama: "Kopi Susu",
            gambar: "images/kopi.jpg"
        },
        {
            nama: "Matcha Latte",
            gambar: "images/matcha latte1.jpg"
        },
        {
            nama: "Kentang Goreng",
            gambar: "images/kentang goreng.jpg"
        }
    ],
    foto: [
        "images/maio1.jpg",
        "images/maio2.jpg",
        "images/maio3.jpg"
    ]
},

  
};


// MENAMPILKAN MENU MINUMAN
function lihatMenu(cafe) {
    const data = dataCafe[cafe];

    if (!data) {
        alert("Data cafe tidak ditemukan.");
        return;
    }

    const isiModal = document.getElementById("isiModal");
    const modal = document.getElementById("modal");

    if (!isiModal || !modal) {
        alert("Periksa elemen modal di index.html.");
        return;
    }

    if (data.menu.length === 0) {
        isiModal.innerHTML = `
            <h2>Menu ${data.nama}</h2>
            <p>Menu cafe ini belum ditambahkan.</p>
        `;
    } else {
        isiModal.innerHTML = `
            <h2>Menu ${data.nama}</h2>
            <p>Berikut pilihan menu minuman.</p>

            <div class="daftar-menu">
                ${data.menu.map(item => `
                    <div class="menu-item">
                        <img
                            src="${item.gambar}"
                            alt="${item.nama}"
                            onerror="this.alt='Foto belum tersedia'; this.classList.add('gambar-gagal');"
                        >
                        <h3>${item.nama}</h3>
                    </div>
                `).join("")}
            </div>
        `;
    }

    modal.style.display = "flex";
}


// MENAMPILKAN FOTO CAFE
function lihatFoto(cafe) {
    const data = dataCafe[cafe];

    if (!data) {
        alert("Data cafe tidak ditemukan.");
        return;
    }

    const isiModal = document.getElementById("isiModal");
    const modal = document.getElementById("modal");

    if (!isiModal || !modal) {
        alert("Periksa elemen modal di index.html.");
        return;
    }

    isiModal.innerHTML = `
        <h2>Foto ${data.nama}</h2>

        <div class="daftar-menu">
            ${data.foto.map((foto, index) => `
                <div class="menu-item">
                    <img
                        src="${foto}"
                        alt="Foto ${data.nama} ${index + 1}"
                        onerror="this.alt='Foto belum tersedia'; this.classList.add('gambar-gagal');"
                    >
                    <h3>Foto ${index + 1}</h3>
                </div>
            `).join("")}
        </div>
    `;

    modal.style.display = "flex";
}


// MENUTUP JENDELA MENU ATAU FOTO
function tutupMenu() {
    const modal = document.getElementById("modal");

    if (modal) {
        modal.style.display = "none";
    }
}


// MENUTUP JIKA AREA LUAR KOTAK DIKLIK
document.addEventListener("click", function(event) {
    const modal = document.getElementById("modal");

    if (modal && event.target === modal) {
        tutupMenu();
    }
});


// MENUTUP DENGAN TOMBOL ESCAPE
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        tutupMenu();
    }
});
function bukaOlangMesa() {
    document.getElementById("pilihan-olang-mesa").style.display = "block";
    document.getElementById("menu-olang-mesa").style.display = "none";
    document.getElementById("foto-olang-mesa").style.display = "none";
}

function tampilMenuOlangMesa() {
    document.getElementById("pilihan-olang-mesa").style.display = "none";
    document.getElementById("menu-olang-mesa").style.display = "block";
    document.getElementById("foto-olang-mesa").style.display = "none";
}

function tampilFotoOlangMesa() {
    document.getElementById("pilihan-olang-mesa").style.display = "none";
    document.getElementById("menu-olang-mesa").style.display = "none";
    document.getElementById("foto-olang-mesa").style.display = "block";
}

function kembaliOlangMesa() {
    document.getElementById("pilihan-olang-mesa").style.display = "block";
    document.getElementById("menu-olang-mesa").style.display = "none";
    document.getElementById("foto-olang-mesa").style.display = "none";
}