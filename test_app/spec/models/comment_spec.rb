require 'rails_helper'

RSpec.describe Comment, type: :model do
  before(:each) do
    @comment = create(:comment)
  end

  context "バリデーションについて" do
    it "通常時にコメントが保存されるか" do
      expect(@comment).to be_valid
    end
  end
end
