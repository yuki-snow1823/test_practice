FactoryBot.define do
  factory :user do
    id { 999 }
    email { "test@gmail.com" }
    password { "hogehoge" }
  end

  factory :user_2 do
    email { }
    password { "hogehoge" }
  end
end
