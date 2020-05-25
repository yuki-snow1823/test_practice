require 'rails_helper'

RSpec.describe User, type: :model do
  before(:each) do
    @user = create(:user) # ここで定義
  end

  context "バリデーションについて" do
    it "emailがある場合、ユーザーが保存されるか" do
      expect(@user).to be_valid
    end

    it 'メールアドレスが未入力であれば無効' do
      user = User.new(password: nil)
      user.valid?
      # binding.pry
      expect(user.errors[:email]).to include('を入力してください')
    end

    it '重複したメールアドレスであれば無効' do
      User.create!(
        email: 'test@example.com',
        password: 'hogehoge',
        password_confirmation: 'hogehoge'
      )
      user = User.new(
        name: 'テスター',
        email: 'test@example.com',
        password: 'hogehoge',
        password_confirmation: 'hogehoge'
      )
      user.valid?
      expect(user.errors[:email]).to include('はすでに存在します')
    end
  end
end
