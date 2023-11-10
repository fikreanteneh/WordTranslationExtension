import * as Model from ".";

export default interface Schema {
  public: {
    Tables: {
      language: {
        Row: Model.Language;
        Insert: Model.Language;
        Update: Model.Language;
      };
      translation: {
        Row: Model.Translation;
        Insert: Model.Translation;
        Update: Model.Translation;
      };
    };
  };
}
