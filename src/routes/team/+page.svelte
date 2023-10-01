<script lang="ts">
    // Sample data for team members
    let teamMembers = [
        {
            name: "Mason Wheeler",
            role: "Nothing yet",
            contact: "360-975-8555",
            email: "mwheel@uw.edu",
        },
        {
            name: "Diana Ochoa-Mendoza",
            role: "Nothing yet",
            contact: "509-831-9707",
            email: "ochoadi@uw.edu",
        },
        {
            name: "Quentin Fiessinger",
            role: "Nothing yet",
            contact: "425-372-6964",
            email: "qfiess@uw.edu",
        },
        {
            name: "Lucy Camblin",
            role: "Nothing yet",
            contact: "206-483-9614",
            email: "lcambl@uw.edu",
        }
    ];
  </script>
  
  <div class="team-page">
      <header>
          <h1>Our Team</h1>
          <p>Meet the Squad.</p>
      </header>
  
      <section class="team-members">
          {#each teamMembers as member}
              <div class="member-card">
                  <h3>{member.name}</h3>
                  <p class="role">{member.role}</p>
                  <p>{member.contact}</p>
                  <p><a href="mailto:{member.email}">{member.email}</a></p>
              </div>
          {/each}
      </section>
  </div>
  
  <style>
    .team-page {
        background: linear-gradient(145deg, #f8f9fa, #e6e8ec);
        padding: 40px 30px;
        max-width: 900px;
        margin: 60px auto;
        border-radius: 15px;
        box-shadow: 8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff;
    }
  
    header {
        margin-bottom: 30px;
    }
  
    h1 {
        font-size: 2.5em;
        font-weight: 600;
        color: #333;
        margin-bottom: 15px;
    }
  
    header p {
        font-size: 1.1em;
        color: #555;
        margin-bottom: 20px;
        line-height: 1.5;
    }
  
    .team-members {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
    }
  
    .member-card {
        background: #ffffff;
        padding: 25px;
        border-radius: 15px;
        box-shadow: 4px 4px 10px #d1d1d1, -4px -4px 10px #ffffff;
        text-align: center;
    }
  
    .member-card h3 {
        font-size: 1.5em;
        margin-bottom: 10px;
        color: #444;
    }
  
    .member-card .role {
        font-weight: 500;
        color: #777;
        margin-bottom: 20px;
    }
  
    .member-card a {
        color: #007BFF;
        text-decoration: none;
    }
  
    .member-card a:hover {
        text-decoration: underline;
    }
  </style>
  