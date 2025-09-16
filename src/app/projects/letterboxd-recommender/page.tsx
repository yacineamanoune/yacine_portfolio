'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function LetterboxdRecommenderPost() {
  return (
    <>
      <Header showHomeLink={true} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-[2.5rem] font-serif tracking-tight text-primary">Letterboxd Movie Recommender</h1>
        <p className="text-sm text-foreground">Feb 09, 2025</p>

        <div className="mt-6 prose prose-sm max-w-none prose-headings:text-primary prose-p:text-foreground prose-a:text-white prose-a:underline prose-a:decoration-1 prose-a:underline-offset-4 prose-a:font-medium prose-a:mx-1 prose-li:text-foreground prose-ol:text-foreground prose-ul:text-foreground">
          <img 
            src="/images/letterboxd-recommender.webp" 
            alt="Letterboxd Recommender Screenshot"
            className="w-full rounded-lg shadow-lg mb-6"
          />
          
          <p>
            <strong className="text-primary">Letterboxd Movie Recommender</strong> is a web app that helps users discover new movies based on their Letterboxd profile and viewing history. By leveraging collaborative filtering and machine learning, it generates personalized recommendations tailored to your unique taste.
          </p>

          <h2>Why I Built It</h2>
          <p>
            As a movie enthusiast, I found myself constantly searching for films that matched my interests. While Letterboxd is a fantastic platform for tracking movies, its recommendation features are limited. I wanted to create a tool that could analyze my ratings and watchlist to suggest movies I’d genuinely enjoy.
          </p>

          <h2>How It Works</h2>
          <ul>
            <li>Connect your Letterboxd account and import your movie data</li>
            <li>Analyze your ratings, reviews, and watchlist</li>
            <li>Apply collaborative filtering to find users with similar tastes</li>
            <li>Recommend movies you haven’t seen but are highly rated by your “taste neighbors”</li>
          </ul>

          <h2>Tech Stack</h2>
          <ul>
            <li>Python & Pandas for data processing</li>
            <li>Scikit-learn for collaborative filtering algorithms</li>
            <li>Next.js & Tailwind CSS for the frontend</li>
            <li>Letterboxd API (unofficial) for data import</li>
          </ul>

          <h2>Challenges</h2>
          <p>
            The biggest challenge was working with Letterboxd’s limited API access. I had to build custom scrapers and data parsers to reliably fetch user data. Ensuring privacy and security for user accounts was also a top priority.
          </p>

          <h2>Results & Future Plans</h2>
          <p>
            The recommender has helped users discover hidden gems and broaden their movie horizons. I plan to add more features, such as genre-based recommendations, integration with other platforms, and improved algorithms for even better suggestions.
          </p>

          <p>
            <a href="https://github.com/yacamanou/letterboxd-recommender" target="_blank" rel="noopener noreferrer">
              View the code on GitHub
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}