export function CreateCard({cards,onDelete}){
    return <div className='card'>
      {cards.map(function (card){
        const handleDelete = () => {
          onDelete(card._id);
        };
       return <div className='whole'>
    
       <div className="container">

        <h3>{card.name}</h3>
        <h4>{card.description}</h4>
       
        <div className='interest'>
          <h3>Interests</h3>
          <ul>
            {
             card.interests.map( function(item,index){
              return <li>{item}</li>
              
            })
          }
          </ul>
        </div>
      
        <div>
         
        {Object.keys(card.social).map(function (key){
  
  let socialKey = key;
  let value = card.social[key];
  let buttonClass = '';
           if (socialKey === 'LinkedIn') {
             buttonClass = 'linkedin-button';
           } else if (socialKey === 'X') {
             buttonClass = 'x-button';
           }
           return (
            <a  href={value}>
              <button className={buttonClass}>{socialKey}</button>
            </a>
          );
  
  
})}
        
      
        </div>
        <button onClick={handleDelete}>Delete</button>
        </div>
        </div>
      })}
      
    </div>
    }