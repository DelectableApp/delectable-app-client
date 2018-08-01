<div class="c-navigation-bar">

  <div class="c-navigation-bar__primary">
    <ul>
      <li class="c-navigation-bar__primary-item-notifiable">
        <router-link :to="{name:'index'}">Fil d'actualité</router-link>
      </li>
      <li>
        <router-link :to="{name:'explore'}">Découvrir</router-link>
      </li>
      <li class="c-navigation-bar__primary-item-notifiable">
        <router-link :to="{name:'notifications'}">Notifications</router-link>
      </li>
      <li class="c-navigation-bar__primary-item-notifiable">
        <router-link :to="{name:'profil',params:{profil:'guillaume.hess'}}">Messagerie</router-link>
      </li>
    </ul>
  </div>

  <div class="c-navigation-bar__secondary">
    <div class="c-navigation-bar__user-link-mobile">
      <router-link :to="{name:'profil',params:{profil:'guillaume.hess'}}">Mon profil</router-link>
    </div>

    <div class="c-navigation-bar__search-bar-mobile">
      <router-link :to="{name:'search'}">Recherche</router-link>
    </div>

    <div class="c-navigation-bar__settings-link-mobile">
      <router-link :to="{name:'settings'}">Paramètres</router-link>
    </div>
  </div>

</div>
