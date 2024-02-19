import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { useTitle } from '../../hooks/useTitle';
import Spinner from '../../components/Loading/Loading';
import './styles.css';
import PageHeading from '../../components/PageHeading/PageHeading';
import { calculators } from './calculators'; 

const featuredApps = [
    {
        name: 'Varsity',
        url: 'https://zerodha.com/varsity/',
        description:
            'Varsity is an extensive and in-depth collection of stock market and financial lessons created by Karthik Rangappa at Zerodha. It is free and openly accessible to everyone and is one of the largest financial education resources on the web.',
    },
    {
        name: 'NCFE',
        url: 'https://ncfe.org.in/',
        description:
            'National Centre for Financial Education (NCFE) promote Financial Education across India for all sections of the population as per the National strategy for Financial Education of Financial Stability and Development Council.',
    },
];

const Home = () => {
    useTitle('Home ');
    const { isLoading } = useSelector((state) => state.auth);

    return (
        <>
            {isLoading && <Spinner />}

            <PageHeading
            heading="HOME"
            secondaryHeading=" A Place to build  your Future  " 
            clamp={false}
            className="animated-heading"
/>
<p> Welcome to my  finance website! Here, you'll find valuable resources and tools to enhance your financial knowledge and make
	 informed decisions. Explore my  financial calculators,  and much more. Start your journey to financial literacy today!</p>
       {/* Importance of Finance */}
<div className="container">
    
<PageHeading
                heading="IMPORTANCE OF FINANCIAL EDUCATION" 
               
                clamp={false}
            />
    <p>
        Financial education is crucial for everyone as it equips them with essential skills and knowledge to navigate their financial futures effectively:
    </p>
    <ul>
        <li>
            <strong>Financial Literacy:</strong> Students learn to manage personal finances efficiently, including budgeting, investing, and understanding tax implications.
        </li>
        <br /> {/* Gap after the first list item */}
        <li>
            <strong>Enhanced Career Opportunities:</strong> Financially literate students have a competitive edge in the job market, showcasing financial responsibility and decision-making skills.
        </li>
        <br /> {/* Gap after the second list item */}
        <li>
            <strong>Improved Entrepreneurial Skills:</strong> Understanding financial statements and making strategic financial decisions prepare students for entrepreneurial ventures.
        </li>
        <br /> {/* Gap after the third list item */}
        <li>
            <strong>Long-term Financial Stability:</strong> Financial education helps students make informed choices about investments, retirement planning, and wealth accumulation for future stability and peace of mind.
        </li>
    </ul>
</div>

        
			
            <PageHeading
                heading="CALCULATORS" 
                secondaryHeading="Choose a Financial Calculator" 
                clamp={false}
            />


            <div className="calculator-container">
                {calculators.map((calculator, i) => (
                    <Link
                        key={`calculator-${i}`}
                        className="calculator-card"
                        to={`/${calculator.url}`}
                    >
                        <div>
                            <h2>{calculator.name}</h2>
                            <hr />
                            <p>{calculator.description}</p>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="featured-apps-seperator">
                <div />
                <h2>Featured</h2>
                <div />
            </div>

          

            <div className="calculator-container">
                {featuredApps.map((app, i) => (
                    <a
                        key={`app-${i}`}
                        className="calculator-card"
                        href={`${app.url}`}
                        rel="noreferrer"
                        target="_blank"
                    >
                        <h2>{app.name}</h2>
                        <div className="featured-app-icon-container">
                            <FaExternalLinkAlt />
                        </div>
                        <hr />
                        <p>{app.description}</p>
                    </a>
                ))}
            </div>
        </>
    );
};

export default Home;
