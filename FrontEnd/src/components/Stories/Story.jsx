import { useContext, useState, useMemo,useRef,useEffect } from "react"; // useMemo'yu ekledik
import { AuthContext } from "../../context/AuthContext";
import "./Story.scss";

export const Story = () => {
const sliderRef = useRef();
const [storyWidth, setStoryWidth] = useState(0);
useEffect(() => {
  const updateStoryWidth = () => {
    if (sliderRef.current) {
      const firstStory = sliderRef.current.querySelector(".story");
      if (firstStory) {
        const style = getComputedStyle(firstStory);
        const width = firstStory.offsetWidth + parseInt(style.marginRight || 0);
        setStoryWidth(width);
      }
      
    }
      
  };
  updateStoryWidth();
  window.addEventListener("resize", updateStoryWidth);

  return () => {
    window.removeEventListener("resize", updateStoryWidth);
   
  };
}, []);

    const { currentUser } = useContext(AuthContext);
    // Datalarınız aynı kalıyor
    const stories = [
        { id: 1, name: "John Doe", img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
        { id: 2, name: "Cohn Doe", img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
        { id: 3, name: "Wohn Doe", img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
        { id: 4, name: "Eohn Doe", img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
        { id: 5, name: "Kohn Doe", img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
        { id: 6, name: "Lohn Doe", img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
        { id: 7, name: "Mohn Doe", img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
        { id: 8, name: "Bohn Doe", img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
          { id: 9, name: "Pohn Doe", img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" }
    ];

    // --- YENİ VE ÖNEMLİ DEĞİŞİKLİKLER ---

    // 1. Kullanıcının hikayesini ve diğerlerini tek bir dizide birleştiriyoruz.
    // useMemo kullanarak bu işlemin gereksiz yere tekrarlanmasını engelliyoruz.
    const allStories = useMemo(() => [
        { ...currentUser, img: currentUser.profilePicture, id: currentUser.id }, // Kullanıcının hikayesini ekliyoruz
        ...stories
    ], [currentUser, stories]);

    // 2. Kodun daha okunabilir olması için sabitler tanımlıyoruz.
    const currentStory = 5; 
    const slideStory = 4; //bizim kaydırma miktarımız, her sayfada 4 hikaye gösterilecek şekilde ayarlandı.Ama

    const [page, setPage] = useState(0);

    // 3. Toplam sayfa sayısını doğru hesaplıyoruz.
    // Kaydırılabilecek toplam hikaye sayısı = (Tüm hikayeler - Ekranda görünenler)

    const slidableItems = allStories.length - currentStory;
    const totalPages = slidableItems > 0 ? 1 + Math.ceil(slidableItems / slideStory) : 1;

    // 4. Kaydırma miktarını hesaplıyoruz.
    // Bir hikayenin kapladığı yer = genişlik (150px) + boşluk (10px) = 160px
    const slideOffset = page * slideStory * (storyWidth + 10); // 10px boşluk ekliyoruz

    const handleNext = () => {
        // Sonraki sayfa, toplam sayfa sayısını geçemez
        if (page < totalPages - 1) {
            setPage(page + 1);
        }
    };

    const handlePrev = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };

    return (
        <div className="stories">
            {page > 0 && (
                <button className="leftButton" onClick={handlePrev}>
                    &lt;
                </button>
            )}
            {page < totalPages - 1 && (
                <button className="rightButton" onClick={handleNext}>
                    &gt;
                </button>
            )}

            {/* Container'ın genişliği artık CSS'de sabitlendiği için taşma olmayacak */}
            <div className="container">
                <div
                    className="slider"
                    ref={sliderRef}
                    style={{ transform: `translateX(-${slideOffset}px)` }}
                >
                    {/* Artık tek bir map fonksiyonu ile tüm hikayeleri render ediyoruz */}
                    {allStories.map((story, index) => (
                        <div className={`story ${story.id}`} key={story.id}>
                            <img src={story.img} alt="" />
                            <span>{story.name}</span>
                            {/* Sadece ilk hikaye (kullanıcının kendi hikayesi) için butonu göster */}
                            {index === 0 && <button>+</button>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};