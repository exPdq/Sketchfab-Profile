async function fetchStats() {
    const username = "yagiz.slz";  // Sketchfab kullanıcı adı
    const accessToken = "a52a9b2ad0484c77ac1f79174854dafa";  // API anahtarınız
    const url = `https://api.sketchfab.com/v3/users/${username}`;  // Kullanıcı bilgileri endpoint'i

    try {
        const response = await fetch(url, {
            headers: { Authorization: `Token ${accessToken}` }
        });

        if (!response.ok) throw new Error("API'den veri çekilemedi!");

        const data = await response.json();

        // API'den gelen verileri HTML içerisine yerleştir
        document.getElementById("totalViews").textContent = data.viewCount || "Bilinmiyor";
        document.getElementById("totalLikes").textContent = data.likeCount || "Bilinmiyor";
    } catch (error) {
        console.error("Hata:", error);
    }
}

// Sayfa yüklendiğinde API verilerini çek
window.onload = fetchStats;
