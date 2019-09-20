export class Quote {
  constructor(
    public quote: string,
    public author: string,
    public likeCount: number = 0,
    public dislikeCount: number = 0,
  ) {}

  getLikeCount = () => this.likeCount - this.dislikeCount
}
