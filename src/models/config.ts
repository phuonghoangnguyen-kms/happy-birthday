export class Config {
    public WelcomeTitle: string;
    public WrongBirthDay: string;
    public BirthDay: {
        Day: number,
        Month: number,
        Year: number,
    };
    public Music: string[];
    public HappyBirthDayText: string;
    public DearMessage: string;
    public Messages: string[];
    public WishlistNumber: number;
    public WishlistMessage: string;
    public LastMessage: string;
    public Email: {
        SecureToken: string,
        To: string,
        From: string,
        Subject: string
    }
    public NameInHeart: {
        Name1: string;
        Name2: string;
    };
}