FactoryBot.define do
  factory :user do
    email { "test@gmail.com" }
    password { "hogehoge" }
  end

  factory :user_2 do
    email { }
    password { "hogehoge" }
  end
end
