async function fetchStats() {
    const username = "yagiz.slz";  // Sketchfab kullanıcı adın
    const accessToken = "a52a9b2ad0484c77ac1f79174854dafa";  // API anahtarın
    const url = `https://api.sketchfab.com/v3/users/${username}`;

    try {
        const response = await fetch(url, {
            headers: { Authorization: `Token ${accessToken}` }
        });

        if (!response.ok) throw new Error("API'den veri çekilemedi!");

        const data = await response.json();
        console.log("API Yanıtı:", data); // Gelen veriyi konsola yazdır

        // Verilerin gerçekten gelip gelmediğini kontrol et
        document.getElementById("views").textContent = data.viewCount ?? "Bilinmiyor";
        document.getElementById("likes").textContent = data.likeCount ?? "Bilinmiyor";

    } catch (error) {
        console.error("Hata:", error);
    }
}

window.onload = fetchStats;
