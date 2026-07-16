/**
 * Card component to display individual vehicle details.
 * 
 * @param {object} props
 * @param {string} props.imgUrI - The source URL for the card image
 * @param {string} props.tag - Category label (e.g., Racing, Supercar)
 * @param {string} props.cardTitle - Header title of the card
 * @param {string} props.description - Body content describing the item
 * @param {string} props.btnLabel - Action text inside the button
 */
const Card = ({ imgUrI, tag, cardTitle, description, btnLabel }) => {
  return (
    <div className="max-w-sm bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden mt-8 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
      
      {/* Card Image and Tag Badge */}
      <div className="relative">
        <img 
          className="w-full h-48 object-cover" 
          src={imgUrI} 
          alt={cardTitle} 
        />
        {tag && (
          <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
            {tag}
          </span>
        )}
      </div>

      {/* Card Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-xl text-slate-900 dark:text-white font-bold tracking-tight mb-2">
            {cardTitle}
          </h2>
          <p className="text-sm text-start text-slate-600 dark:text-slate-400 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-5">
          <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-6 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900">
            {btnLabel}
          </button>
        </div>
      </div>

    </div>
  );
};

export default Card;
