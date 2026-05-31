<template>
  <div>
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-brand">🐔 {{ $t('app_name') }}</div>
        <div class="nav-links">
          <router-link to="/app/dashboard">{{ $t('dashboard') }}</router-link>
          <router-link to="/app/lots">{{ $t('lots') }}</router-link>
          <router-link to="/app/stock">{{ $t('stock') }}</router-link>
          <router-link to="/app/vaccins">{{ $t('vaccins') }}</router-link>
          <router-link to="/app/ventes">{{ $t('ventes') }}</router-link>
          <LanguageSwitcher />
          <button @click="logout" class="logout-btn">{{ $t('logout') }}</button>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher.vue'
import FloatingLanguageSwitcher from './FloatingLanguageSwitcher.vue'

export default {
  components: {
    LanguageSwitcher,
    FloatingLanguageSwitcher
  },
  methods: {
    logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      this.$router.push('/')
    }
  }
}
</script>

<style>
.navbar {
  background: #2c3e50;
  padding: 15px;
  color: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-brand {
  font-size: 1.2rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}

.nav-links a {
  color: white;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 3px;
  transition: background 0.3s;
}

.nav-links a:hover {
  background: #34495e;
}

/* Style pour le lien actif */
.nav-links a.router-link-active,
.nav-links a.router-link-exact-active {
  background: #e74c3c;
  color: white;
}

.logout-btn {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 5px 15px;
  cursor: pointer;
  border-radius: 3px;
  transition: background 0.3s;
}

.logout-btn:hover {
  background: #c0392b;
}

/* Animation lors du scroll */
@keyframes stickySlideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.navbar {
  animation: stickySlideDown 0.3s ease-out;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar {
    padding: 10px;
  }
  
  .nav-links {
    gap: 8px;
  }
  
  .nav-links .language-selector .lang-name {
    display: none;
  }
  
  .nav-links .language-selector .lang-selected {
    padding: 8px;
  }
  
  .nav-links .language-selector .dropdown-icon {
    display: none;
  }
  
  .nav-brand {
    font-size: 1rem;
  }
  
  .logout-btn {
    padding: 4px 10px;
    font-size: 0.85rem;
  }
}

/* Pour très petits écrans */
@media (max-width: 600px) {
  .nav-container {
    flex-direction: column;
    gap: 10px;
  }
  
  .nav-links {
    justify-content: center;
  }
}
</style>