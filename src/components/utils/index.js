import toast from "react-hot-toast";

// Get all cards from localStorage
const getAll = () => {
    const all = localStorage.getItem('cards');
  
    if (all) {
      return JSON.parse(all); // Parse the stored JSON string
    } else {
      console.log('No data');
      return []; // Return an empty array if no data is found
    }
  };
  
  // Add a new card to the list
  const addCard = (card) => {
    // Get all previously saved cards data
    const cards = getAll(); // Will return [] if no data exists
    const isExist = cards.find(item => item.product_id === card.product_id)
    if(isExist) return toast.error('Already Exists')
    cards.push(card); // Add the new card to the array
  
    // Save updated array back to localStorage
    localStorage.setItem('cards', JSON.stringify(cards));
    toast.success('Successfully Added Card');
  };
  

  //  remove card
  const removeCard = id => {
    const cards = getAll();
    const remaining = cards.filter(item => item.product_id !== id)
    localStorage.setItem('cards', JSON.stringify(remaining));
    toast.success('Successfully removed card');
  }
  // Export functions
  export { addCard, getAll, removeCard };
  