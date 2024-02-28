import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starRating'
})
export class StarRatingPipe implements PipeTransform {

  transform(likes: number, dislikes: number): string {
    const totalVotes = likes + dislikes;
    if (totalVotes === 0) {
      return 'No rating';
    }
    const rating = (likes * 5 + dislikes * 1) / totalVotes;
    const roundedRating = rating.toFixed(1); // Round the rating to one decimal place
    const stars = '⭐️'.repeat(Math.round(rating)) + rating.toFixed(1);
    return stars;
  }
}