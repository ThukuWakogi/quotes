export class Quote {
  public likeCount = 0
  public dislikeCount = 0

  constructor(
    public quote: string,
    public author: string,
    public date: Date
  ) {}

  getLikeCount = () => this.likeCount - this.dislikeCount
}
