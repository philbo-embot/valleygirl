class QuizesController < ApplicationController

	# before_action :return_quiz, only: [:show, :edit, :update, :destroy, :remove_quiz]
	def index
		@test = "hello"
	end

	def show

	end


	# PRIVATE METHODS
	# private

	# # def return_quiz
	# # 	@quiz = Quiz.find(params[:id])
	# # end

	# def quiz_params
	# 	params.require(:quiz).permit(:question, :answer1, :answer2, :answer3, :answer4, :answer5)
	# end


end
