export const loadGoogleMaps = (callback) => {
   if( typeof google === 'object' && typeof window.google.maps === 'object') {
     
    return   callback()
   }
   
      const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDYXML4_gyGp2cNPECpnl6t4gDg7jCWj_o&libraries=places';
      script.id = 'googleMaps';
      document.body.appendChild(script);
  
      script.onload = () => {
        if (callback) callback();
      };
    }
  
  
