require 'rails_helper'

RSpec.describe User, type: :model do
  before(:each) do
    @user = create(:user) #ここで定義
  end

  context "バリデーションについて" do
    it "emailがある場合、ユーザーが保存されるか" do
      expect(@user).to be_valid
    end
  end
end
