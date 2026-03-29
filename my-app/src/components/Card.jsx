import './Card.css';
import { motion } from 'framer-motion';

function Card({ title, children, className, text_color}) {
    return(
    <motion.div
                whileHover={{ scale : 1.02}}
                transition={{ duration : 1.5, ease: "easeOut"}}
    >
        <div className="card">
            
                {title && <h2 className="card-header">{title}</h2>}
                <div className={`card-body ${className || ''}`} style={{color: text_color}}>
                    {children}
                </div>
        </div>
    </motion.div>
    )
}

export default Card