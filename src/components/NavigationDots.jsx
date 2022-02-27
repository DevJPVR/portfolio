import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "sobre", "portfolio", "habilidades", "testimonials", "contato"].map((item, index) => (
          <a 
             href={`#${item}`}
             key={item + index}
             className="app__navigation-dot"
             style={active === item ? {backgroundColor: '#313bac'} : { }}
          />
      ))}
    </div>
  );
};

export default NavigationDots