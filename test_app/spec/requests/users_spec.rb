require 'rails_helper'

RSpec.describe "Users", type: :request do
  # letを試用
  let!(:user) { create :user }
  let!(:comment) { create :comment }
  describe 'GET #index' do
    context 'ユーザが存在する場合' do
      before do
        sign_in user
      end
      it '正常なレスポンスを返すこと' do
        # binding.pry
        get users_path user
        expect(response.status).to eq 200
      end
      it 'ユーザー名が表示されていること' do
        get users_path user
        expect(response.body).to include 'test@gmail.com'
      end
    end
  end
end
