import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import './OfferCards.css';

const OfferCards = () => {
    return (
        <div className='offers-con'>
            {/* First Card */}
            <div className='sub-offer-cards'>
                <Card
                    sx={{
                        maxWidth: 345,
                        width: 'calc(80% - 20px)',
                        height: 200,
                        backgroundImage: 'url("src/assets/images/strawberry.avif")',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        color: '#fff',
                        position: 'relative',
                        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.2)"

                    }}
                >
                    <div className="card-content">
                        <Typography variant="h4" sx={{ fontWeight: 700 }}>
                            Upto 50% off
                        </Typography>
                        <Typography variant="subtitle1" sx={{ fontWeight: 300 }}>
                            Organic Food Collection
                        </Typography>
                    </div>
                </Card>
            </div>

            {/* Second Card */}
            <div className='sub-offer-cards'>
                <Card
                    sx={{
                        maxWidth: 345,
                        width: 'calc(80% - 20px)',
                        height: 200,
                        backgroundImage: 'url("src/assets/images/orange.avif")',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        position: 'relative',
                        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.2)"

                    }}
                >
                    <div className="card-content">
                        <Typography variant="h4" sx={{ fontWeight: 700 }}>
                            Special Offer
                        </Typography>
                        <Typography variant="subtitle1" sx={{ fontWeight: 300 }}>
                            Fresh Oranges
                        </Typography>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default OfferCards;
