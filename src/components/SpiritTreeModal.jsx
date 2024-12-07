import React from 'react';

const trees = [
  "Oak - The Guardian of Wisdom",
  "Maple - The Tree of Balance",
  "Willow - The Dreamer's Tree",
  "Pine - The Eternal Protector",
  "Cherry - The Blossom of Joy",
  "Birch - The Pioneer Spirit",
  "Cedar - The Tree of Strength",
  "Elm - The Tree of Vision",
  "Aspen - The Communicator",
  "Redwood - The Ancient Soul"
];

function SpiritTreeModal({ isOpen, onClose }) {
  const [selectedTree, setSelectedTree] = React.useState('');

  const selectRandomTree = () => {
    const randomIndex = Math.floor(Math.random() * trees.length);
    setSelectedTree(trees[randomIndex]);
  };

  React.useEffect(() => {
    if (isOpen) {
      selectRandomTree();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="cart-backdrop active"
        onClick={onClose}
        aria-hidden="true"
      />
      <div 
        className="cart-panel cart-panel-open"
        role="dialog"
        aria-modal="true"
        aria-label="Your Spirit Tree"
      >
        <div className="cart-header">
          <h2>Your Spirit Tree</h2>
          <button 
            className="cart-close" 
            onClick={onClose}
            aria-label="Close spirit tree modal"
          >
            ×
          </button>
        </div>
        <div className="cart-content">
          <p className="spirit-tree-text">
            {selectedTree}
          </p>
          <button className="button" onClick={selectRandomTree}>
            Find Another Spirit Tree
          </button>
        </div>
      </div>
    </>
  );
}

export default SpiritTreeModal;