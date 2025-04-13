<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mission Trip to Holland</title>
  <link rel="stylesheet" href="style.css" />
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <style>
    html { scroll-behavior: smooth; }
  </style>
</head>
<body>
  <header>
    <h1>Mission Trip to Holland</h1>
    <p>Sharing the Gospel • Serving with Love</p>
  </header>
  <nav>
    <a href="#mission">Mission</a>
    <a href="#about">About Us</a>
    <a href="#contributions">Contributions</a>
  </nav>

  <section id="mission">
    <h2>Mission Statement</h2>
    <p>Our mission is to share the gospel, serve the local communities in Holland, and grow together as a team through faith and outreach.</p>
  </section>

  <section id="about">
    <h2>Meet the Team</h2>
    <div class="team-member">
      <div class="photo-placeholder"></div>
      <div class="info">
        <h3>Bianca Basson</h3>
        <p><em>Personal statement will go here.</em></p>
        <p><strong>Contact:</strong> [to be added]</p>
      </div>
    </div>
    <div class="team-member">
      <div class="photo-placeholder"></div>
      <div class="info">
        <h3>Clint Cupido</h3>
        <p><em>Personal statement will go here.</em></p>
        <p><strong>Contact:</strong> [to be added]</p>
      </div>
    </div>
    <div class="team-member">
      <div class="photo-placeholder"></div>
      <div class="info">
        <h3>Graeme Weber</h3>
        <p><em>Personal statement will go here.</em></p>
        <p><strong>Contact:</strong> [to be added]</p>
      </div>
    </div>
    <div class="team-member">
      <div class="photo-placeholder"></div>
      <div class="info">
        <h3>Kevin Delorme</h3>
        <p><em>Personal statement will go here.</em></p>
        <p><strong>Contact:</strong> [to be added]</p>
      </div>
    </div>
  </section>

  <section id="contributions">
    <h2>Contributions</h2>
    <canvas id="financeChart" height="100"></canvas>
    <div class="bank-details">
      <h3>Bank Account Details</h3>
      <p><strong>Bank:</strong> [Bank Name]</p>
      <p><strong>Account Holder:</strong> [Mission Team Holland]</p>
      <p><strong>Account Number:</strong> [123 456 7890]</p>
      <p><strong>Branch Code:</strong> [000000]</p>
      <p><strong>Reference:</strong> Your Name + Mission</p>
    </div>
  </section>

  <footer>
    <p>&copy; 2025 Holland Mission Team. All rights reserved.</p>
  </footer>

  <script>
    async function loadChartData() {
      try {
        const res = await fetch('https://your-backend.onrender.com/api/finances');
        const json = await res.json();
        const ctx = document.getElementById('financeChart').getContext('2d');

        new Chart(ctx, {
          type: 'line',
          data: {
            labels: json.labels,
            datasets: [
              {
                label: 'Raised Funds (R)',
                data: json.data,
                borderColor: '#1976d2',
                backgroundColor: 'transparent',
                borderWidth: 2,
                tension: 0.3,
                pointRadius: 0,
                pointHoverRadius: 4
              },
              {
                label: 'Target Goal (R50,000)',
                data: Array(json.labels.length).fill(50000),
                borderColor: 'red',
                borderWidth: 2,
                pointRadius: 0,
                borderDash: [5, 5],
                fill: false
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: 'top'
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  callback: value => 'R' + value.toLocaleString()
                }
              }
            }
          }
        });
      } catch (err) {
        console.error('Error loading chart data:', err);
      }
    }
    loadChartData();
  </script>
</body>
</html>
