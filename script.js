// Sample property data
const propertiesData = [
    {
        id: 1,
        title: "Căn hộ cao cấp tại Quận 1",
        location: "Quận 1, TP.HCM",
        price: "8.5 tỷ",
        type: "apartment",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bedrooms: 3,
        bathrooms: 2,
        area: "120m²",
        description: "Căn hộ cao cấp với view đẹp, nội thất sang trọng, tiện ích đầy đủ.",
        features: ["Hồ bơi", "Gym", "Bảo vệ 24/7", "Thang máy"],
        status: "Bán"
    },
    {
        id: 2,
        title: "Nhà riêng 2 tầng tại Quận 2",
        location: "Quận 2, TP.HCM",
        price: "12 tỷ",
        type: "house",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bedrooms: 4,
        bathrooms: 3,
        area: "200m²",
        description: "Nhà riêng 2 tầng với sân vườn rộng, thiết kế hiện đại.",
        features: ["Sân vườn", "Garage", "Hệ thống an ninh", "Nội thất cao cấp"],
        status: "Bán"
    },
    {
        id: 3,
        title: "Biệt thự ven sông",
        location: "Quận 7, TP.HCM",
        price: "25 tỷ",
        type: "villa",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bedrooms: 5,
        bathrooms: 4,
        area: "350m²",
        description: "Biệt thự ven sông với view tuyệt đẹp, thiết kế sang trọng.",
        features: ["Hồ bơi riêng", "Sân tennis", "Bến tàu riêng", "Hệ thống smart home"],
        status: "Bán"
    },
    {
        id: 4,
        title: "Đất nền mặt tiền đường",
        location: "Quận 9, TP.HCM",
        price: "3.5 tỷ",
        type: "land",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bedrooms: 0,
        bathrooms: 0,
        area: "100m²",
        description: "Đất nền mặt tiền đường, vị trí đắc địa, tiềm năng đầu tư cao.",
        features: ["Mặt tiền rộng", "Gần trung tâm", "Hạ tầng hoàn thiện", "Pháp lý rõ ràng"],
        status: "Bán"
    },
    {
        id: 5,
        title: "Căn hộ studio hiện đại",
        location: "Quận 3, TP.HCM",
        price: "2.8 tỷ",
        type: "apartment",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bedrooms: 1,
        bathrooms: 1,
        area: "45m²",
        description: "Căn hộ studio thiết kế hiện đại, phù hợp cho người độc thân.",
        features: ["Nội thất đầy đủ", "Gym", "Cafe", "Bảo vệ 24/7"],
        status: "Bán"
    },
    {
        id: 6,
        title: "Nhà phố 3 tầng",
        location: "Quận 10, TP.HCM",
        price: "15 tỷ",
        type: "house",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bedrooms: 4,
        bathrooms: 3,
        area: "180m²",
        description: "Nhà phố 3 tầng với thiết kế tối ưu, không gian rộng rãi.",
        features: ["Thiết kế mở", "Sân thượng", "Garage", "Nội thất cao cấp"],
        status: "Bán"
    },
    {
        id: 7,
        title: "Căn hộ 2PN view sông",
        location: "Quận 4, TP.HCM",
        price: "6.2 tỷ",
        type: "apartment",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bedrooms: 2,
        bathrooms: 2,
        area: "85m²",
        description: "Căn hộ 2 phòng ngủ với view sông tuyệt đẹp, gần trung tâm.",
        features: ["View sông", "Gym", "Hồ bơi", "Bảo vệ 24/7"],
        status: "Bán"
    },
    {
        id: 8,
        title: "Nhà vườn 1 tầng",
        location: "Quận 12, TP.HCM",
        price: "4.8 tỷ",
        type: "house",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bedrooms: 3,
        bathrooms: 2,
        area: "150m²",
        description: "Nhà vườn 1 tầng với sân vườn rộng, không khí trong lành.",
        features: ["Sân vườn rộng", "Garage", "Hệ thống an ninh", "Gần công viên"],
        status: "Bán"
    },
    {
        id: 9,
        title: "Biệt thự liền kề",
        location: "Quận 2, TP.HCM",
        price: "18 tỷ",
        type: "villa",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bedrooms: 4,
        bathrooms: 3,
        area: "280m²",
        description: "Biệt thự liền kề trong khu dân cư cao cấp, tiện ích đầy đủ.",
        features: ["Khu dân cư cao cấp", "Hồ bơi chung", "Sân tennis", "Bảo vệ 24/7"],
        status: "Bán"
    },
    {
        id: 10,
        title: "Đất nền khu công nghiệp",
        location: "Bình Dương",
        price: "2.2 tỷ",
        type: "land",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bedrooms: 0,
        bathrooms: 0,
        area: "80m²",
        description: "Đất nền gần khu công nghiệp, tiềm năng phát triển cao.",
        features: ["Gần khu công nghiệp", "Hạ tầng tốt", "Pháp lý rõ ràng", "Giá hợp lý"],
        status: "Bán"
    },
    {
        id: 11,
        title: "Căn hộ 3PN penthouse",
        location: "Quận 1, TP.HCM",
        price: "35 tỷ",
        type: "apartment",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bedrooms: 3,
        bathrooms: 3,
        area: "200m²",
        description: "Penthouse cao cấp với view toàn thành phố, nội thất sang trọng.",
        features: ["View toàn thành phố", "Hồ bơi riêng", "Gym riêng", "Butler service"],
        status: "Bán"
    },
    {
        id: 12,
        title: "Nhà phố 4 tầng mặt tiền",
        location: "Quận 5, TP.HCM",
        price: "22 tỷ",
        type: "house",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bedrooms: 5,
        bathrooms: 4,
        area: "220m²",
        description: "Nhà phố 4 tầng mặt tiền đường lớn, vừa ở vừa kinh doanh.",
        features: ["Mặt tiền rộng", "Thiết kế mở", "Sân thượng", "Garage 2 xe"],
        status: "Bán"
    },
    {
        id: 13,
        title: "Căn hộ 1PN cho thuê",
        location: "Quận 7, TP.HCM",
        price: "15 triệu/tháng",
        type: "apartment",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bedrooms: 1,
        bathrooms: 1,
        area: "35m²",
        description: "Căn hộ 1 phòng ngủ cho thuê, nội thất đầy đủ, gần trung tâm.",
        features: ["Nội thất đầy đủ", "Gym", "Hồ bơi", "Bảo vệ 24/7"],
        status: "Cho thuê"
    },
    {
        id: 14,
        title: "Biệt thự biển",
        location: "Vũng Tàu",
        price: "45 tỷ",
        type: "villa",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bedrooms: 6,
        bathrooms: 5,
        area: "500m²",
        description: "Biệt thự biển với view biển tuyệt đẹp, thiết kế sang trọng.",
        features: ["View biển", "Hồ bơi riêng", "Bãi biển riêng", "Helipad"],
        status: "Bán"
    },
    {
        id: 15,
        title: "Đất nền ven sông",
        location: "Cần Thơ",
        price: "1.8 tỷ",
        type: "land",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bedrooms: 0,
        bathrooms: 0,
        area: "120m²",
        description: "Đất nền ven sông, không khí trong lành, tiềm năng đầu tư.",
        features: ["Ven sông", "Không khí trong lành", "Hạ tầng tốt", "Pháp lý rõ ràng"],
        status: "Bán"
    }
];

// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const propertiesGrid = document.getElementById('propertiesGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchBtn = document.querySelector('.search-btn');
const modal = document.getElementById('propertyModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close');
const contactForm = document.querySelector('.contact-form');

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Property Filtering
let currentFilter = 'all';

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        // Update current filter
        currentFilter = btn.getAttribute('data-filter');
        // Filter and display properties
        displayProperties();
    });
});

// Display Properties
function displayProperties() {
    const filteredProperties = currentFilter === 'all' 
        ? propertiesData 
        : propertiesData.filter(property => property.type === currentFilter);
    
    propertiesGrid.innerHTML = '';
    
    filteredProperties.forEach(property => {
        const propertyCard = createPropertyCard(property);
        propertiesGrid.appendChild(propertyCard);
    });
}

// Create Property Card
function createPropertyCard(property) {
    const card = document.createElement('div');
    card.className = 'property-card';
    card.setAttribute('data-type', property.type);
    
    const featuresHtml = property.features.map(feature => 
        `<span class="feature">
            <i class="fas fa-check"></i>
            ${feature}
        </span>`
    ).join('');
    
    card.innerHTML = `
        <div class="property-image">
            <img src="${property.image}" alt="${property.title}" loading="lazy">
            <div class="property-badge">${property.status}</div>
            <div class="property-price">${property.price}</div>
        </div>
        <div class="property-content">
            <h3 class="property-title">${property.title}</h3>
            <p class="property-location">
                <i class="fas fa-map-marker-alt"></i>
                ${property.location}
            </p>
            <div class="property-features">
                ${property.bedrooms > 0 ? `<span class="feature"><i class="fas fa-bed"></i> ${property.bedrooms} phòng ngủ</span>` : ''}
                ${property.bathrooms > 0 ? `<span class="feature"><i class="fas fa-bath"></i> ${property.bathrooms} phòng tắm</span>` : ''}
                <span class="feature"><i class="fas fa-expand-arrows-alt"></i> ${property.area}</span>
            </div>
            <p class="property-description">${property.description}</p>
            <div class="property-actions">
                <button class="btn-primary" onclick="viewPropertyDetails(${property.id})">
                    Xem chi tiết
                </button>
                <button class="btn-secondary" onclick="contactAboutProperty(${property.id})">
                    Liên hệ
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// View Property Details
function viewPropertyDetails(propertyId) {
    const property = propertiesData.find(p => p.id === propertyId);
    if (!property) return;
    
    const featuresHtml = property.features.map(feature => 
        `<li><i class="fas fa-check"></i> ${feature}</li>`
    ).join('');
    
    modalContent.innerHTML = `
        <div class="property-details">
            <div class="property-detail-image">
                <img src="${property.image}" alt="${property.title}">
                <div class="property-badge">${property.status}</div>
                <div class="property-price">${property.price}</div>
            </div>
            <div class="property-detail-content">
                <h2>${property.title}</h2>
                <p class="property-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${property.location}
                </p>
                <div class="property-specs">
                    ${property.bedrooms > 0 ? `<div class="spec"><i class="fas fa-bed"></i><span>${property.bedrooms} phòng ngủ</span></div>` : ''}
                    ${property.bathrooms > 0 ? `<div class="spec"><i class="fas fa-bath"></i><span>${property.bathrooms} phòng tắm</span></div>` : ''}
                    <div class="spec"><i class="fas fa-expand-arrows-alt"></i><span>${property.area}</span></div>
                </div>
                <div class="property-description-full">
                    <h3>Mô tả</h3>
                    <p>${property.description}</p>
                </div>
                <div class="property-features-list">
                    <h3>Tiện ích</h3>
                    <ul>${featuresHtml}</ul>
                </div>
                <div class="property-actions">
                    <button class="btn-primary" onclick="contactAboutProperty(${property.id})">
                        <i class="fas fa-phone"></i>
                        Liên hệ ngay
                    </button>
                    <button class="btn-secondary" onclick="shareProperty(${property.id})">
                        <i class="fas fa-share"></i>
                        Chia sẻ
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Contact About Property
function contactAboutProperty(propertyId) {
    const property = propertiesData.find(p => p.id === propertyId);
    if (!property) return;
    
    // Scroll to contact form
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    
    // Pre-fill the contact form with property info
    const form = document.querySelector('.contact-form');
    const textarea = form.querySelector('textarea');
    textarea.value = `Tôi quan tâm đến bất động sản: ${property.title} - ${property.price}`;
    
    // Show notification
    showNotification('Thông tin bất động sản đã được thêm vào form liên hệ!', 'success');
}

// Share Property
function shareProperty(propertyId) {
    const property = propertiesData.find(p => p.id === propertyId);
    if (!property) return;
    
    const shareText = `Xem bất động sản: ${property.title} - ${property.price} tại ${property.location}`;
    const shareUrl = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: property.title,
            text: shareText,
            url: shareUrl
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(`${shareText} - ${shareUrl}`).then(() => {
            showNotification('Đã sao chép link chia sẻ!', 'success');
        });
    }
}

// Search Functionality
searchBtn.addEventListener('click', () => {
    const locationInput = document.querySelector('.search-input input');
    const typeSelect = document.getElementById('propertyType');
    const priceSelect = document.getElementById('priceRange');
    const bedroomsSelect = document.getElementById('bedrooms');
    
    const location = locationInput.value.toLowerCase();
    const type = typeSelect.value;
    const price = priceSelect.value;
    const bedrooms = bedroomsSelect.value;
    
    let filteredProperties = propertiesData;
    
    // Filter by location
    if (location) {
        filteredProperties = filteredProperties.filter(property => 
            property.location.toLowerCase().includes(location) ||
            property.title.toLowerCase().includes(location)
        );
    }
    
    // Filter by type
    if (type) {
        filteredProperties = filteredProperties.filter(property => 
            property.type === type
        );
    }
    
    // Filter by price
    if (price) {
        if (price === 'rent') {
            filteredProperties = filteredProperties.filter(property => 
                property.price.includes('triệu/tháng')
            );
        } else {
            const [min, max] = price.split('-').map(p => p === '' ? 0 : parseFloat(p));
            filteredProperties = filteredProperties.filter(property => {
                if (property.price.includes('triệu/tháng')) return false;
                const propertyPrice = parseFloat(property.price.replace(' tỷ', ''));
                if (max === 0) return propertyPrice >= min;
                return propertyPrice >= min && propertyPrice <= max;
            });
        }
    }
    
    // Filter by bedrooms
    if (bedrooms) {
        filteredProperties = filteredProperties.filter(property => {
            if (bedrooms === '5+') {
                return property.bedrooms >= 5;
            }
            return property.bedrooms === parseInt(bedrooms);
        });
    }
    
    // Update current filter and display
    currentFilter = 'search';
    propertiesGrid.innerHTML = '';
    
    if (filteredProperties.length === 0) {
        propertiesGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>Không tìm thấy bất động sản phù hợp</h3>
                <p>Hãy thử thay đổi tiêu chí tìm kiếm của bạn</p>
            </div>
        `;
    } else {
        filteredProperties.forEach(property => {
            const propertyCard = createPropertyCard(property);
            propertiesGrid.appendChild(propertyCard);
        });
    }
    
    // Scroll to properties section
    document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
});

// Contact Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const phone = contactForm.querySelector('input[type="tel"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Simulate form submission
    showNotification('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.', 'success');
    
    // Reset form
    contactForm.reset();
});

// Modal Close
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Show Notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 3000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .property-details {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }
    
    .property-detail-image {
        position: relative;
        border-radius: 15px;
        overflow: hidden;
    }
    
    .property-detail-image img {
        width: 100%;
        height: 400px;
        object-fit: cover;
    }
    
    .property-specs {
        display: flex;
        gap: 1rem;
        margin: 1rem 0;
    }
    
    .spec {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: #f3f4f6;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.9rem;
    }
    
    .property-description-full,
    .property-features-list {
        margin: 1.5rem 0;
    }
    
    .property-description-full h3,
    .property-features-list h3 {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: #1f2937;
    }
    
    .property-features-list ul {
        list-style: none;
        padding: 0;
    }
    
    .property-features-list li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
        color: #6b7280;
    }
    
    .property-features-list li i {
        color: #10b981;
    }
    
    .no-results {
        text-align: center;
        padding: 3rem;
        color: #6b7280;
    }
    
    .no-results i {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: #d1d5db;
    }
    
    .no-results h3 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        color: #374151;
    }
    
    @media (max-width: 768px) {
        .property-details {
            grid-template-columns: 1fr;
        }
        
        .property-specs {
            flex-direction: column;
        }
    }
`;
document.head.appendChild(style);

// AI Chat functionality
const chatToggle = document.getElementById('chatToggle');
const chatContainer = document.getElementById('chatContainer');
const chatClose = document.getElementById('chatClose');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendMessage = document.getElementById('sendMessage');

// Chat toggle functionality
chatToggle.addEventListener('click', () => {
    chatContainer.classList.toggle('active');
    if (chatContainer.classList.contains('active')) {
        chatInput.focus();
    }
});

chatClose.addEventListener('click', () => {
    chatContainer.classList.remove('active');
});

// Send message functionality
sendMessage.addEventListener('click', sendChatMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendChatMessage();
    }
});

function sendChatMessage() {
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Add user message
    addMessage(message, 'user');
    chatInput.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Simulate AI response
    setTimeout(() => {
        hideTypingIndicator();
        const aiResponse = generateAIResponse(message);
        addMessage(aiResponse, 'ai');
    }, 1500);
}

function addMessage(content, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    if (sender === 'ai') {
        const img = document.createElement('img');
        img.src = 'images/ai-icon.svg';
        img.alt = 'AI Icon';
        img.className = 'ai-avatar-img';
        avatar.appendChild(img);
    } else {
        avatar.innerHTML = '<i class="fas fa-user"></i>';
    }
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.innerHTML = `<p>${content}</p>`;
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(messageContent);
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message ai-message typing-indicator';
    typingDiv.id = 'typingIndicator';
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    const img = document.createElement('img');
    img.src = 'images/ai-icon.svg';
    img.alt = 'AI Icon';
    img.className = 'ai-avatar-img';
    avatar.appendChild(img);
    
    const typingContent = document.createElement('div');
    typingContent.className = 'typing-dots';
    typingContent.innerHTML = `
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
    `;
    
    typingDiv.appendChild(avatar);
    typingDiv.appendChild(typingContent);
    chatMessages.appendChild(typingDiv);
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function generateAIResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Greeting responses
    if (message.includes('chào') || message.includes('xin chào') || message.includes('hello')) {
        return `Xin chào! Tôi rất vui được hỗ trợ bạn. Tôi có thể giúp bạn:<br><br>
        🔍 <strong>Tìm kiếm bất động sản</strong> phù hợp<br>
        💰 <strong>Thông tin giá cả</strong> thị trường<br>
        📋 <strong>Thủ tục mua bán</strong> chi tiết<br>
        🏠 <strong>Tư vấn đầu tư</strong> hiệu quả<br>
        📊 <strong>Phân tích thị trường</strong> chuyên sâu<br><br>
        Hãy cho tôi biết bạn cần hỗ trợ gì nhé! 😊`;
    }
    
    // Property search responses
    if (message.includes('căn hộ') && (message.includes('2 phòng') || message.includes('2pn'))) {
        return `Tôi tìm thấy một số căn hộ 2 phòng ngủ phù hợp:<br><br>
        🏠 <strong>Căn hộ 2PN view sông</strong> - 6.2 tỷ<br>
        📍 Quận 4, TP.HCM | 85m² | 2PN, 2WC<br>
        ✨ View sông, Gym, Hồ bơi<br><br>
        🏠 <strong>Căn hộ cao cấp Quận 1</strong> - 8.5 tỷ<br>
        📍 Quận 1, TP.HCM | 120m² | 3PN, 2WC<br>
        ✨ Hồ bơi, Gym, Bảo vệ 24/7<br><br>
        Bạn muốn xem thêm chi tiết căn hộ nào?`;
    }
    
    if (message.includes('căn hộ') && (message.includes('1 phòng') || message.includes('1pn'))) {
        return `Căn hộ 1 phòng ngủ phù hợp:<br><br>
        🏠 <strong>Căn hộ studio hiện đại</strong> - 2.8 tỷ<br>
        📍 Quận 3, TP.HCM | 45m² | 1PN, 1WC<br>
        ✨ Nội thất đầy đủ, Gym, Cafe<br><br>
        🏠 <strong>Căn hộ 1PN cho thuê</strong> - 15 triệu/tháng<br>
        📍 Quận 7, TP.HCM | 35m² | 1PN, 1WC<br>
        ✨ Nội thất đầy đủ, Gym, Hồ bơi<br><br>
        Bạn quan tâm mua hay thuê?`;
    }
    
    if (message.includes('nhà riêng') || message.includes('nhà phố')) {
        return `Nhà riêng và nhà phố phù hợp:<br><br>
        🏠 <strong>Nhà riêng 2 tầng</strong> - 12 tỷ<br>
        📍 Quận 2, TP.HCM | 200m² | 4PN, 3WC<br>
        ✨ Sân vườn, Garage, Hệ thống an ninh<br><br>
        🏠 <strong>Nhà phố 4 tầng mặt tiền</strong> - 22 tỷ<br>
        📍 Quận 5, TP.HCM | 220m² | 5PN, 4WC<br>
        ✨ Mặt tiền rộng, Sân thượng, Garage 2 xe<br><br>
        Bạn cần nhà ở hay kinh doanh?`;
    }
    
    if (message.includes('biệt thự') || message.includes('villa')) {
        return `Biệt thự cao cấp:<br><br>
        🏰 <strong>Biệt thự ven sông</strong> - 25 tỷ<br>
        📍 Quận 7, TP.HCM | 350m² | 5PN, 4WC<br>
        ✨ Hồ bơi riêng, Sân tennis, Bến tàu riêng<br><br>
        🏰 <strong>Biệt thự biển</strong> - 45 tỷ<br>
        📍 Vũng Tàu | 500m² | 6PN, 5WC<br>
        ✨ View biển, Hồ bơi riêng, Helipad<br><br>
        Bạn quan tâm biệt thự nào?`;
    }
    
    if (message.includes('đất nền') || message.includes('đất')) {
        return `Đất nền đầu tư:<br><br>
        🏞️ <strong>Đất nền mặt tiền đường</strong> - 3.5 tỷ<br>
        📍 Quận 9, TP.HCM | 100m²<br>
        ✨ Mặt tiền rộng, Gần trung tâm<br><br>
        🏞️ <strong>Đất nền khu công nghiệp</strong> - 2.2 tỷ<br>
        📍 Bình Dương | 80m²<br>
        ✨ Gần khu công nghiệp, Hạ tầng tốt<br><br>
        Bạn muốn đầu tư hay xây nhà?`;
    }
    
    // Price information
    if (message.includes('giá') || message.includes('price')) {
        return `Thông tin giá cả thị trường:<br><br>
        📊 <strong>Giá căn hộ TP.HCM:</strong><br>
        • Quận 1-3: 60-120 triệu/m²<br>
        • Quận 7, 9: 40-80 triệu/m²<br>
        • Quận 12, Bình Tân: 25-50 triệu/m²<br><br>
        📊 <strong>Giá đất nền:</strong><br>
        • Quận 1-3: 200-500 triệu/m²<br>
        • Quận 7, 9: 80-150 triệu/m²<br>
        • Quận 12, Bình Tân: 30-80 triệu/m²<br><br>
        💡 <strong>Lưu ý:</strong> Giá có thể thay đổi tùy theo vị trí và tiện ích.`;
    }
    
    // Procedures
    if (message.includes('thủ tục') || message.includes('mua nhà') || message.includes('mua bán')) {
        return `Thủ tục mua bán bất động sản:<br><br>
        📋 <strong>Giấy tờ cần thiết:</strong><br>
        • CMND/CCCD (bản gốc + photo)<br>
        • Sổ hộ khẩu<br>
        • Giấy chứng nhận thu nhập<br>
        • Hợp đồng lao động<br>
        • Sao kê ngân hàng 6 tháng<br><br>
        🏦 <strong>Quy trình mua bán:</strong><br>
        1. Đặt cọc và ký hợp đồng<br>
        2. Làm thủ tục vay ngân hàng (nếu cần)<br>
        3. Ký hợp đồng mua bán chính thức<br>
        4. Làm thủ tục sang tên<br>
        5. Bàn giao nhà<br><br>
        Bạn cần hỗ trợ thêm về bước nào?`;
    }
    
    // Investment advice
    if (message.includes('đầu tư') || message.includes('sinh lời') || message.includes('lợi nhuận')) {
        return `Tư vấn đầu tư bất động sản:<br><br>
        💰 <strong>Loại hình đầu tư:</strong><br>
        • Căn hộ cho thuê: Lợi nhuận 6-8%/năm<br>
        • Đất nền: Tiềm năng tăng giá cao<br>
        • Nhà phố: Vừa ở vừa kinh doanh<br>
        • Biệt thự: Đầu tư dài hạn<br><br>
        📈 <strong>Khu vực tiềm năng:</strong><br>
        • Quận 7, 9: Đang phát triển mạnh<br>
        • Quận 2: Gần sân bay Tân Sơn Nhất<br>
        • Bình Dương: Giá hợp lý, hạ tầng tốt<br>
        • Vũng Tàu: Du lịch, nghỉ dưỡng<br><br>
        Bạn quan tâm đầu tư loại nào?`;
    }
    
    // Market analysis
    if (message.includes('thị trường') || message.includes('xu hướng') || message.includes('phân tích')) {
        return `Phân tích thị trường bất động sản 2024:<br><br>
        📊 <strong>Xu hướng chính:</strong><br>
        • Giá căn hộ ổn định, tăng nhẹ 3-5%<br>
        • Đất nền khu vực ngoại thành tăng mạnh<br>
        • Căn hộ cho thuê phục hồi sau COVID<br>
        • Biệt thự, nhà phố cao cấp vẫn hút khách<br><br>
        🎯 <strong>Khu vực nổi bật:</strong><br>
        • Quận 9: Phát triển hạ tầng mạnh<br>
        • Bình Dương: Thu hút đầu tư nước ngoài<br>
        • Long An: Giá đất tăng nhanh<br><br>
        Bạn muốn tìm hiểu sâu hơn về khu vực nào?`;
    }
    
    // Location specific
    if (message.includes('quận 1') || message.includes('quận 2') || message.includes('quận 3')) {
        return `Bất động sản khu vực trung tâm:<br><br>
        🏙️ <strong>Quận 1:</strong> Căn hộ cao cấp, penthouse<br>
        • Giá: 60-120 triệu/m²<br>
        • Tiện ích: Trung tâm thương mại, trường học quốc tế<br><br>
        🏙️ <strong>Quận 2:</strong> Khu đô thị mới, biệt thự<br>
        • Giá: 40-80 triệu/m²<br>
        • Tiện ích: Hệ thống giao thông hiện đại<br><br>
        🏙️ <strong>Quận 3:</strong> Căn hộ tầm trung<br>
        • Giá: 50-90 triệu/m²<br>
        • Tiện ích: Gần trung tâm, giá hợp lý<br><br>
        Bạn quan tâm quận nào?`;
    }
    
    // Financing
    if (message.includes('vay') || message.includes('ngân hàng') || message.includes('tài chính')) {
        return `Thông tin vay mua nhà:<br><br>
        🏦 <strong>Điều kiện vay:</strong><br>
        • Thu nhập ổn định từ 15 triệu/tháng<br>
        • Có tài sản đảm bảo<br>
        • Lịch sử tín dụng tốt<br>
        • Đóng 20-30% giá trị nhà<br><br>
        💰 <strong>Lãi suất hiện tại:</strong><br>
        • Vay mua nhà: 8.5-12%/năm<br>
        • Vay đầu tư: 10-14%/năm<br>
        • Thời hạn: 15-25 năm<br><br>
        Bạn cần tư vấn về khoản vay nào?`;
    }
    
    // Default response
    return `Cảm ơn bạn đã hỏi! Tôi hiểu bạn quan tâm đến "${userMessage}".<br><br>
    Để tôi có thể tư vấn chính xác hơn, bạn có thể:<br>
    • Mô tả cụ thể hơn về nhu cầu<br>
    • Cho biết ngân sách dự kiến<br>
    • Chỉ định khu vực quan tâm<br>
    • Nói rõ mục đích (ở, đầu tư, kinh doanh)<br><br>
    Hoặc sử dụng các câu hỏi nhanh bên dưới để tôi hỗ trợ tốt hơn! 😊`;
}

// Quick question functionality
function askQuickQuestion(question) {
    chatInput.value = question;
    sendChatMessage();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayProperties();
    
    // Add loading animation to search button
    searchBtn.addEventListener('click', () => {
        const originalText = searchBtn.innerHTML;
        searchBtn.innerHTML = '<div class="loading"></div> Tìm kiếm...';
        searchBtn.disabled = true;
        
        setTimeout(() => {
            searchBtn.innerHTML = originalText;
            searchBtn.disabled = false;
        }, 1000);
    });
    
    // Add scroll effect to header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
    
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.service-card, .property-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
