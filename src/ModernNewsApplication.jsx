import { useState } from 'react';
import { Clock, TrendingUp, Play, ChevronRight, Eye, MessageCircle, Share2 } from 'lucide-react';

const theme = {
  primary: '#FF4458',
  secondary: '#6C5CE7',
  green: '#00D9A3',
  blue: '#0984E3',
  yellow: '#FDCB6E',
  dark: '#2D3436',
  text: '#2D3436',
  textLight: '#636E72',
  bg: '#FFFFFF',
  bgLight: '#F8F9FA'
};

// Small News Card Component
const SmallNewsCard = ({ news, showImage = true }) => (
  <div className="d-flex gap-3 mb-3 pb-3 border-bottom small-news-item" style={{ cursor: 'pointer' }}>
    {showImage && (
      <img
        src={news.image}
        alt={news.title}
        className="rounded"
        style={{ width: '90px', height: '90px', objectFit: 'cover', flexShrink: 0 }}
        onError={(e) => e.target.src = 'https://via.placeholder.com/90x90/FF4458/ffffff?text=News'}
      />
    )}
    <div className="flex-grow-1">
      {news.category && (
        <span className="badge mb-2" style={{ backgroundColor: news.categoryColor || theme.green, fontSize: '0.65rem', padding: '4px 8px' }}>
          {news.category}
        </span>
      )}
      <h6 className="fw-bold mb-2 lh-sm" style={{ fontSize: '0.9rem', color: theme.text }}>
        {news.title}
      </h6>
      <div className="d-flex align-items-center gap-3 text-muted" style={{ fontSize: '0.7rem' }}>
        <span className="d-flex align-items-center">
          <Clock size={12} className="me-1" />
          {news.date}
        </span>
        <span className="d-flex align-items-center">
          <Eye size={12} className="me-1" />
          {news.views}
        </span>
      </div>
    </div>
  </div>
);

// Large News Card Component
const LargeNewsCard = ({ news, size = 'large' }) => (
  <div className="position-relative overflow-hidden rounded large-news-card" style={{ 
    height: size === 'large' ? '450px' : '250px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease'
  }}>
    <img
      src={news.image}
      alt={news.title}
      className="w-100 h-100 object-fit-cover"
      style={{ transition: 'transform 0.5s ease' }}
      onError={(e) => e.target.src = 'https://via.placeholder.com/800x450/FF4458/ffffff?text=News'}
    />
    <div className="position-absolute bottom-0 start-0 w-100 p-4" style={{
      background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)'
    }}>
      {news.category && (
        <span className="badge mb-2" style={{ backgroundColor: news.categoryColor || theme.primary, fontSize: '0.7rem', padding: '5px 10px' }}>
          {news.category}
        </span>
      )}
      <h3 className={`fw-bold text-white mb-3 lh-base`} style={{ fontSize: size === 'large' ? '1.5rem' : '1.1rem' }}>
        {news.title}
      </h3>
      <div className="d-flex align-items-center gap-3 text-white" style={{ fontSize: '0.8rem' }}>
        <span className="d-flex align-items-center opacity-75">
          <Clock size={14} className="me-1" />
          {news.date}
        </span>
        <span className="d-flex align-items-center opacity-75">
          <Eye size={14} className="me-1" />
          {news.views}
        </span>
        <span className="d-flex align-items-center opacity-75">
          <MessageCircle size={14} className="me-1" />
          {news.comments}
        </span>
      </div>
    </div>
  </div>
);

// Video Item Component
const VideoItem = ({ video, featured = false }) => (
  <div className={`d-flex gap-3 mb-3 ${featured ? '' : 'align-items-center'}`} style={{ cursor: 'pointer' }}>
    {featured ? (
      <div className="position-relative rounded overflow-hidden" style={{ width: '100%', height: '250px' }}>
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-100 h-100 object-fit-cover"
          onError={(e) => e.target.src = 'https://via.placeholder.com/400x250/0984E3/ffffff?text=Video'}
        />
        <div className="position-absolute top-50 start-50 translate-middle">
          <div className="rounded-circle d-flex align-items-center justify-content-center" 
               style={{ width: '60px', height: '60px', backgroundColor: 'rgba(255,68,88,0.9)' }}>
            <Play size={24} fill="white" color="white" />
          </div>
        </div>
        <span className="position-absolute bottom-0 end-0 m-2 badge bg-dark px-2 py-1">
          {video.duration}
        </span>
      </div>
    ) : (
      <div className="position-relative rounded overflow-hidden" style={{ width: '80px', height: '60px', flexShrink: 0 }}>
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-100 h-100 object-fit-cover"
          onError={(e) => e.target.src = 'https://via.placeholder.com/80x60/0984E3/ffffff?text=Video'}
        />
        <div className="position-absolute top-50 start-50 translate-middle">
          <Play size={16} fill="white" color="white" />
        </div>
      </div>
    )}
    <div className={featured ? 'mt-3' : 'flex-grow-1'}>
      <h6 className={`fw-bold mb-1 lh-sm text-white`} style={{ fontSize: featured ? '1.1rem' : '0.85rem' }}>
        {video.title}
      </h6>
      <div className="d-flex align-items-center gap-2 text-white opacity-75" style={{ fontSize: '0.7rem' }}>
        <span>{video.views}</span>
        <span>•</span>
        <span>{video.date}</span>
      </div>
    </div>
  </div>
);

// Category Box Component
const CategoryBox = ({ category }) => (
  <div className="text-center p-4 rounded category-box" style={{ backgroundColor: category.color, cursor: 'pointer', transition: 'transform 0.3s ease' }}>
    <div className="text-white mb-2" style={{ fontSize: '2rem' }}>{category.icon}</div>
    <h6 className="text-white fw-bold mb-1" style={{ fontSize: '0.9rem' }}>{category.name}</h6>
    <small className="text-white opacity-75">{category.count}</small>
  </div>
);

// Full News Modal Component
const NewsModal = ({ news, onClose, relatedNews }) => {
  if (!news) return null;

  return (
    <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }} onClick={onClose}>
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content border-0 shadow-lg">
          {/* Header */}
          <div className="modal-header border-0 pb-0">
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          {/* Body */}
          <div className="modal-body p-0">
            {/* Featured Image */}
            <img
              src={news.image}
              alt={news.title}
              className="w-100"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
              onError={(e) => e.target.src = 'https://via.placeholder.com/1200x400/FF4458/ffffff?text=News'}
            />

            <div className="p-4 p-md-5">
              {/* Category & Meta */}
              <div className="d-flex align-items-center justify-content-between mb-3">
                <span className="badge px-3 py-2" style={{ backgroundColor: news.categoryColor || theme.primary, fontSize: '0.8rem' }}>
                  {news.category || 'News'}
                </span>
                <div className="d-flex align-items-center gap-3 text-muted" style={{ fontSize: '0.9rem' }}>
                  <span className="d-flex align-items-center">
                    <Clock size={16} className="me-2" />
                    {news.date}
                  </span>
                  <span className="d-flex align-items-center">
                    <Eye size={16} className="me-2" />
                    {news.views}
                  </span>
                  {news.comments && (
                    <span className="d-flex align-items-center">
                      <MessageCircle size={16} className="me-2" />
                      {news.comments}
                    </span>
                  )}
                </div>
              </div>

              {/* Title */}
              <h2 className="fw-bold mb-4" style={{ color: theme.text, lineHeight: '1.4' }}>
                {news.title}
              </h2>

              {/* Author & Date */}
              {news.author && (
                <div className="d-flex align-items-center gap-3 mb-4 pb-4 border-bottom">
                  <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                    <span className="text-white fw-bold">{news.author.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="fw-bold" style={{ color: theme.text }}>{news.author}</div>
                    <small className="text-muted">Published on {news.date}</small>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="article-content mb-5" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: theme.text }}>
                {news.fullContent ? (
                  <div dangerouslySetInnerHTML={{ __html: news.fullContent }} />
                ) : (
                  <>
                    <p className="mb-4">
                      {news.excerpt || news.content || 'This is a comprehensive news article covering all aspects of the story. The article provides detailed information, expert opinions, and thorough analysis of the situation.'}
                    </p>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="mb-4">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <h4 className="fw-bold mt-5 mb-3" style={{ color: theme.text }}>Key Highlights</h4>
                    <ul className="mb-4" style={{ lineHeight: '2' }}>
                      <li>Detailed analysis of the current situation and its implications</li>
                      <li>Expert opinions from industry leaders and analysts</li>
                      <li>Impact on various stakeholders and future outlook</li>
                      <li>Recommendations and next steps for concerned parties</li>
                    </ul>
                    <p className="mb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <p className="mb-4">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
                  </>
                )}
              </div>

              {/* Share & Actions */}
              <div className="d-flex align-items-center gap-3 mb-5 pb-5 border-bottom">
                <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
                  <Share2 size={18} />
                  Share
                </button>
                <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
                  <MessageCircle size={18} />
                  Comment
                </button>
              </div>

              {/* Related News */}
              {relatedNews && relatedNews.length > 0 && (
                <div>
                  <h4 className="fw-bold mb-4" style={{ color: theme.text }}>Related News</h4>
                  <div className="row g-4">
                    {relatedNews.slice(0, 3).map((related, idx) => (
                      <div key={idx} className="col-md-4">
                        <div className="card border-0 shadow-sm h-100" style={{ cursor: 'pointer' }}>
                          <img
                            src={related.image}
                            alt={related.title}
                            className="card-img-top"
                            style={{ height: '150px', objectFit: 'cover' }}
                            onError={(e) => e.target.src = 'https://via.placeholder.com/300x150/FF4458/ffffff?text=News'}
                          />
                          <div className="card-body p-3">
                            {related.category && (
                              <span className="badge mb-2" style={{ backgroundColor: related.categoryColor || theme.primary, fontSize: '0.65rem' }}>
                                {related.category}
                              </span>
                            )}
                            <h6 className="fw-bold mb-2 lh-sm" style={{ fontSize: '0.9rem', color: theme.text }}>
                              {related.title}
                            </h6>
                            <small className="text-muted d-flex align-items-center">
                              <Clock size={12} className="me-1" />
                              {related.date}
                            </small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
export default function NewsPortal() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedNews, setSelectedNews] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openNewsModal = (news) => {
    setSelectedNews(news);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeNewsModal = () => {
    setShowModal(false);
    setSelectedNews(null);
    document.body.style.overflow = 'auto';
  };

  // Sample Data
  const featuredNews = {
    title: 'VR is the Use of Computer Technology to Create a Simulated Environment',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800',
    category: 'Technology',
    categoryColor: theme.secondary,
    date: 'Jan 15, 2025',
    views: '2.5k',
    comments: '45'
  };

  const recentNews = [
    {
      title: 'Ml Scores After The Moon Landing: How Close News in Space Travel, Reveals Reality',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400',
      category: 'Technology',
      categoryColor: theme.yellow,
      date: 'Jan 15, 2025',
      views: '1.2k'
    },
    {
      title: "Tesla's Looking for a New Way To Drive its Cars, Report Says",
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400',
      date: 'Jan 14, 2025',
      views: '980'
    },
    {
      title: 'Top 10 Upskill in Revenue A Canadian Arctic City',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400',
      category: 'Business',
      categoryColor: theme.green,
      date: 'Jan 14, 2025',
      views: '1.5k'
    },
    {
      title: 'African Nations Are Struggling To Save Their Wildlife',
      image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400',
      date: 'Jan 13, 2025',
      views: '850'
    }
  ];

  const topStories = [
    {
      title: '50 Years After The Moon Landing: How Close is Space',
      image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=600',
      category: 'Science',
      categoryColor: theme.yellow,
      date: 'Jan 15, 2025',
      views: '3.2k',
      comments: '67'
    },
    {
      title: 'Should Become an App-Enabled Social Environment',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
      category: 'Business',
      categoryColor: theme.blue,
      date: 'Jan 14, 2025',
      views: '2.1k',
      comments: '34'
    },
    {
      title: 'Nearly All the Bold Type Writers on Predicting Magazine',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400',
      category: 'Lifestyle',
      categoryColor: theme.green,
      date: 'Jan 14, 2025',
      views: '1.8k',
      comments: '29'
    }
  ];

  const trendingStories = [
    {
      title: 'Jehovah Witness Members Describe the Courela in the Brussels Charge the Publice have Ever Made',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300',
      category: 'Politics',
      categoryColor: theme.primary,
      date: 'Jan 15, 2025',
      views: '2.3k'
    },
    {
      title: "Tesla's Looking for a New Way To Drive its Cars, Report Says",
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300',
      category: 'Auto',
      categoryColor: theme.secondary,
      date: 'Jan 14, 2025',
      views: '1.9k'
    },
    {
      title: 'Questeme The Feeling Of killing Demartsland',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=300',
      date: 'Jan 14, 2025',
      views: '1.4k'
    },
    {
      title: 'Top 10 Upskill in Revenue A Canadian Arctic City',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300',
      category: 'Business',
      categoryColor: theme.green,
      date: 'Jan 13, 2025',
      views: '1.7k'
    },
    {
      title: 'African Nations Are Struggling To Save Their Wildlife',
      image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=300',
      date: 'Jan 13, 2025',
      views: '1.2k'
    },
    {
      title: 'Informed consultation on prioritization of candidate vaccines agents for use',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300',
      category: 'Health',
      categoryColor: theme.blue,
      date: 'Jan 12, 2025',
      views: '2.8k'
    }
  ];

  const videos = [
    {
      title: 'These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales',
      thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600',
      duration: '8:45',
      views: '125k',
      date: '2 days ago'
    },
    {
      title: 'How Can You Be More Successful',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200',
      duration: '5:20',
      views: '89k',
      date: '3 days ago'
    },
    {
      title: "How To Creatively Leave Your Business Here",
      thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200',
      duration: '12:30',
      views: '156k',
      date: '4 days ago'
    },
    {
      title: '3 Places Can Find Good Technology Data',
      thumbnail: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200',
      duration: '6:15',
      views: '67k',
      date: '5 days ago'
    },
    {
      title: 'Everything You Wanted to Know About TECHNOLOGY',
      thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=200',
      duration: '9:40',
      views: '94k',
      date: '1 week ago'
    }
  ];

  const lifestyleNews = [
    {
      title: 'Informal consultation on prioritization of candidate vaccines agents for use',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600',
      category: 'Health',
      categoryColor: theme.blue,
      date: 'Jan 15, 2025',
      views: '3.5k',
      comments: '89'
    },
    {
      title: 'Why Everything You Knew About Technology is Changing the World',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400',
      category: 'Tech',
      categoryColor: theme.secondary,
      date: 'Jan 14, 2025',
      views: '2.1k',
      comments: '45'
    },
    {
      title: 'Top 10 Upskill in Revenue A Canadian Arctic City',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
      category: 'Business',
      categoryColor: theme.green,
      date: 'Jan 13, 2025',
      views: '1.9k',
      comments: '56'
    }
  ];

  const magazineNews = [
    {
      title: 'Top 10 Upskill in Revenue A Canadian Arctic City',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400',
      category: 'Business',
      categoryColor: theme.green,
      excerpt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookma',
      date: 'Jan 15, 2025',
      author: 'John Doe'
    },
    {
      title: 'World Travel Holdings Will be Honored Kangoroo Chier Recognize',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400',
      category: 'Travel',
      categoryColor: theme.blue,
      excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted part',
      date: 'Jan 14, 2025',
      author: 'Jane Smith'
    },
    {
      title: 'Will The Democrats Be Able To Reverse The Online Gambling Ban',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400',
      category: 'Politics',
      categoryColor: theme.primary,
      excerpt: 'It shows a fatal at the initial point of its existence. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring',
      date: 'Jan 13, 2025',
      author: 'Mike Johnson'
    },
    {
      title: 'Why Everything You Know About Travel is A Lie',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400',
      category: 'Travel',
      categoryColor: theme.blue,
      excerpt: 'The question of whether to travel in the summer or wait for the off season always pops up when you are planning vacations abroad. Both have their pros',
      date: 'Jan 12, 2025',
      author: 'Sarah Williams'
    },
    {
      title: 'Team Duo in a Horrific Accident While Placing the Bunny Photos',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400',
      category: 'News',
      categoryColor: theme.yellow,
      excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted part',
      date: 'Jan 11, 2025',
      author: 'Tom Brown'
    },
    {
      title: 'Micci By Air The Best Way Around The Planet',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400',
      category: 'Travel',
      categoryColor: theme.green,
      excerpt: 'Whilst the first hints of daylight strated to appear over the horizon far far away, behind the word mountains, far from the countries Vokalia',
      date: 'Jan 10, 2025',
      author: 'Lisa Anderson'
    }
  ];

  const categories = [
    { name: 'Travel', icon: '✈️', count: '142', color: '#FF6B6B' },
    { name: 'Food', icon: '🍔', count: '234', color: '#4ECDC4' },
    { name: 'Lifestyle', icon: '🎨', count: '189', color: '#95E1D3' },
    { name: 'Fashion', icon: '👗', count: '156', color: '#F38181' }
  ];

  const popularPosts = [
    {
      title: 'Informed consultation on prioritization of candidate vaccines agents against',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=200',
      date: 'Jan 15, 2025',
      comments: '45'
    },
    {
      title: 'Golden man and normal with are being developed and deployed to save',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=200',
      date: 'Jan 14, 2025',
      comments: '67'
    },
    {
      title: 'Commerce Drives HQE BOP Stock 2021 After',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200',
      date: 'Jan 13, 2025',
      comments: '34'
    }
  ];

  return (
    <div className="news-portal" style={{ backgroundColor: theme.bgLight }}>
      <style>{`
        .small-news-item:hover h6 {
          color: ${theme.primary} !important;
          transition: color 0.3s ease;
        }
        .large-news-card:hover {
          transform: translateY(-4px);
        }
        .large-news-card:hover img {
          transform: scale(1.1);
        }
        .category-box:hover {
          transform: translateY(-5px);
        }
        .magazine-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
        }
      `}</style>

      {/* Main Content */}
      <div className="container py-4">
        <div className="row g-4">
          {/* Left Column - Main Featured */}
          <div className="col-lg-7">
            <LargeNewsCard news={featuredNews} size="large" />
          </div>

          {/* Right Column - Recent News */}
          <div className="col-lg-5">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h5 className="fw-bold mb-0" style={{ color: theme.text }}>Recent News</h5>
              <button className="btn btn-sm text-decoration-none d-flex align-items-center" style={{ color: theme.primary, background: 'none', border: 'none', padding: 0 }}>
                ALL RECENT <ChevronRight size={16} className="ms-1" />
              </button>
            </div>
            {recentNews.map((news, idx) => (
              <SmallNewsCard key={idx} news={news} />
            ))}
          </div>
        </div>

        {/* Top Stories Section */}
        <div className="mt-5">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h4 className="fw-bold mb-0" style={{ color: theme.text }}>Top Stories</h4>
            <button className="btn btn-sm text-decoration-none d-flex align-items-center" style={{ color: theme.primary, background: 'none', border: 'none', padding: 0 }}>
              ALL TOP STORIES <ChevronRight size={16} className="ms-1" />
            </button>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <LargeNewsCard news={topStories[0]} size="large" />
            </div>
            <div className="col-lg-6">
              <div className="row g-4">
                {topStories.slice(1).map((news, idx) => (
                  <div key={idx} className="col-12">
                    <LargeNewsCard news={news} size="small" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trending Stories Section */}
        <div className="mt-5">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h4 className="fw-bold mb-0 d-flex align-items-center" style={{ color: theme.text }}>
              <TrendingUp size={24} className="me-2" style={{ color: theme.primary }} />
              Trending Stories
            </h4>
            <button className="btn btn-sm text-decoration-none d-flex align-items-center" style={{ color: theme.primary, background: 'none', border: 'none', padding: 0 }}>
              ALL TRENDING STORIES <ChevronRight size={16} className="ms-1" />
            </button>
          </div>

          <div className="row g-3">
            {trendingStories.map((news, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <SmallNewsCard news={news} />
              </div>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        <div className="mt-5 p-4 rounded" style={{ backgroundColor: theme.dark }}>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h4 className="fw-bold mb-0 text-white d-flex align-items-center">
              <Play size={24} className="me-2" style={{ color: theme.primary }} />
              Videos
            </h4>
            <button className="btn btn-sm text-decoration-none d-flex align-items-center text-white" style={{ background: 'none', border: 'none', padding: 0 }}>
              SEE MORE <ChevronRight size={16} className="ms-1" />
            </button>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <VideoItem video={videos[0]} featured={true} />
            </div>
            <div className="col-lg-6">
              {videos.slice(1).map((video, idx) => (
                <VideoItem key={idx} video={video} />
              ))}
            </div>
          </div>
        </div>

        {/* Lifestyle Section */}
        <div className="mt-5">
          <div className="mb-4">
            <h4 className="fw-bold mb-0" style={{ color: theme.text }}>Lifestyle</h4>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <LargeNewsCard news={lifestyleNews[0]} size="large" />
            </div>
            <div className="col-lg-6">
              <div className="row g-4">
                {lifestyleNews.slice(1).map((news, idx) => (
                  <div key={idx} className="col-12">
                    <LargeNewsCard news={news} size="small" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* News & Magazine Section */}
        <div className="mt-5">
          <div className="row g-4">
            {/* Left - Magazine Articles */}
            <div className="col-lg-8">
              <div className="d-flex align-items-center mb-4">
                <h4 className="fw-bold mb-0 me-3" style={{ color: theme.text }}>News & Magazine Theme</h4>
                <button className="btn btn-sm px-3 text-white" style={{ backgroundColor: theme.primary, borderRadius: '20px' }}>
                  SUBSCRIBE NOW
                </button>
              </div>

              <div className="row g-4">
                {magazineNews.map((article, idx) => (
                  <div key={idx} className="col-md-6">
                    <div className="card border-0 shadow-sm h-100 magazine-card" style={{ transition: 'all 0.3s ease' }}>
                      <img
                        src={article.image}
                        alt={article.title}
                        className="card-img-top"
                        style={{ height: '200px', objectFit: 'cover' }}
                        onError={(e) => e.target.src = 'https://via.placeholder.com/400x200/2563eb/ffffff?text=News'}
                      />
                      <div className="card-body p-3">
                        <span className="badge mb-2" style={{ backgroundColor: article.categoryColor, fontSize: '0.7rem', padding: '4px 10px' }}>
                          {article.category}
                        </span>
                        <h6 className="fw-bold mb-2 lh-sm" style={{ color: theme.text }}>
                          {article.title}
                        </h6>
                        <p className="text-muted mb-3" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                          {article.excerpt}
                        </p>
                        <div className="d-flex align-items-center justify-content-between" style={{ fontSize: '0.75rem' }}>
                          <span className="text-muted">{article.author}</span>
                          <span className="text-muted">{article.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Sidebar */}
            <div className="col-lg-4">
              {/* Categories */}
              <div className="mb-4">
                <h5 className="fw-bold mb-3" style={{ color: theme.text }}>Categories</h5>
                <div className="row g-3">
                  {categories.map((cat, idx) => (
                    <div key={idx} className="col-6">
                      <CategoryBox category={cat} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Web Content */}
              <div className="card border-0 shadow-sm p-3 mb-4">
                <h6 className="fw-bold mb-3" style={{ color: theme.text }}>Web Content</h6>
                {popularPosts.map((post, idx) => (
                  <div key={idx} className="d-flex gap-3 mb-3 pb-3 border-bottom">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="rounded"
                      style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                      onError={(e) => e.target.src = 'https://via.placeholder.com/70x70/FF4458/ffffff?text=News'}
                    />
                    <div>
                      <h6 className="fw-bold mb-1 lh-sm" style={{ fontSize: '0.85rem', color: theme.text }}>
                        {post.title}
                      </h6>
                      <div className="d-flex align-items-center gap-2 text-muted" style={{ fontSize: '0.7rem' }}>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span className="d-flex align-items-center">
                          <MessageCircle size={12} className="me-1" />
                          {post.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="card border-0 shadow-sm p-3">
                <h6 className="fw-bold mb-3" style={{ color: theme.text }}>Tags</h6>
                <div className="d-flex flex-wrap gap-2">
                  {['Adventure', 'Traveling', 'Beach', 'Business', 'Travel', 'gadgets.ai', 'Lifestyle', 'News', 'Technology', 'Entertainment', 'Food', 'travel', 'gadgets', 'test'].map((tag, idx) => (
                    <span
                      key={idx}
                      className="badge px-3 py-2"
                      style={{ 
                        backgroundColor: theme.bgLight, 
                        color: theme.textLight,
                        fontSize: '0.75rem',
                        fontWeight: 'normal',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        border: '1px solid #e0e0e0'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = theme.primary;
                        e.target.style.color = 'white';
                        e.target.style.borderColor = theme.primary;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = theme.bgLight;
                        e.target.style.color = theme.textLight;
                        e.target.style.borderColor = '#e0e0e0';
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}