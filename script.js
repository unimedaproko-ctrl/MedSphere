// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Set current date in footer
  const currentDateElement = document.getElementById('current-date');
  const currentDate = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
  currentDateElement.textContent = currentDate.toLocaleDateString('en-US', options);
  
  // Modal elements
  const circularModal = document.getElementById('circular-modal');
  const accountModal = document.getElementById('account-modal');
  const readCircularBtn = document.getElementById('read-circular');
  const accountLink = document.getElementById('account-link');
  const communityLink = document.getElementById('community-link');
  const communityQuickLink = document.getElementById('community-quick-link');
  const closeModalButtons = document.querySelectorAll('.close-modal');
  
  // Open circular modal
  readCircularBtn.addEventListener('click', function(e) {
    e.preventDefault();
    circularModal.style.display = 'block';
  });
  
  // Open account modal
  accountLink.addEventListener('click', function(e) {
    e.preventDefault();
    accountModal.style.display = 'block';
  });
  
  // Community link - simulate opening new tab
  function openCommunityPage() {
    // Create a simple community page simulation
    const communityWindow = window.open('', '_blank');
    communityWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>MEDSphere Community</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
                    .container { max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
                    h1 { color: #8B0000; margin-bottom: 20px; }
                    .message { background: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #B22222; }
                    .sender { font-weight: bold; color: #333; margin-bottom: 5px; }
                    .timestamp { font-size: 12px; color: #666; margin-bottom: 10px; }
                    .input-area { margin-top: 30px; }
                    textarea { width: 100%; height: 100px; padding: 10px; border-radius: 5px; border: 1px solid #ddd; margin-bottom: 10px; }
                    button { background: #8B0000; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; }
                    button:hover { background: #B22222; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>MEDSphere Community Hub</h1>
                    <p>Welcome to the campus community! Connect with fellow students, share experiences, and stay updated on campus life.</p>
                    
                    <div class="message">
                        <div class="sender">@MedStudent2025</div>
                        <div class="timestamp">Today, 10:30 AM</div>
                        <p>Is anyone attending the Health Symposium tomorrow? Looking for study buddies!</p>
                    </div>
                    
                    <div class="message">
                        <div class="sender">@FutureDoc</div>
                        <div class="timestamp">Yesterday, 8:15 PM</div>
                        <p>Just finished my anatomy practical exam. So relieved! How is everyone preparing for the holidays?</p>
                    </div>
                    
                    <div class="message">
                        <div class="sender">@CampusRep</div>
                        <div class="timestamp">Dec 16, 2025, 3:45 PM</div>
                        <p>Reminder: Library extended hours during exam period. Check the notice board for details.</p>
                    </div>
                    
                    <div class="input-area">
                        <h3>Join the Conversation</h3>
                        <textarea placeholder="Type your message here..."></textarea>
                        <button onclick="alert('Message posted! This is a demo feature.')">Post Message</button>
                    </div>
                    
                    <p style="margin-top: 30px; font-size: 14px; color: #666;">Note: This is a demo community page. In a full implementation, this would be a real-time chat/forum system.</p>
                </div>
            </body>
            </html>
        `);
    communityWindow.document.close();
  }
  
  // Community link handlers
  communityLink.addEventListener('click', function(e) {
    e.preventDefault();
    openCommunityPage();
  });
  
  communityQuickLink.addEventListener('click', function(e) {
    e.preventDefault();
    openCommunityPage();
  });
  
  // Close modal buttons
  closeModalButtons.forEach(button => {
    button.addEventListener('click', function() {
      circularModal.style.display = 'none';
      accountModal.style.display = 'none';
    });
  });
  
  // Close modal when clicking outside
  window.addEventListener('click', function(e) {
    if (e.target === circularModal) {
      circularModal.style.display = 'none';
    }
    if (e.target === accountModal) {
      accountModal.style.display = 'none';
    }
  });
  
  // Form submission
  const accountForm = document.getElementById('account-form');
  accountForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const fullName = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const studentId = document.getElementById('student-id').value;
    const department = document.getElementById('department').value;
    
    // Simple validation
    if (!fullName || !email || !studentId || !department) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Check password match
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }
    
    // Check if terms are agreed to
    const terms = document.getElementById('terms').checked;
    if (!terms) {
      alert('You must agree to the Terms of Service and Community Guidelines.');
      return;
    }
    
    // Success message (in a real app, this would send data to server)
    alert(`Account created successfully!\n\nWelcome to MEDSphere, ${fullName}! You can now access the community features.`);
    
    // Close modal and reset form
    accountModal.style.display = 'none';
    accountForm.reset();
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Only for internal anchor links
      if (href !== '#' && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Add active class to current nav link
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    
    if (currentPage === linkHref || (linkHref === 'index.html' && currentPage === '')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
