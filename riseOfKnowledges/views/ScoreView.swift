//
//  ScoreView.swift
//  riseOfKnowledges
//
//  Created by Florian Beaumont on 10/15/20.
//  Copyright © 2020 Florian Beaumont. All rights reserved.
//

import SwiftUI

struct ScoreView: View {
    
    @ObservedObject var score: ScoreViewModel
    
    @ObservedObject var scoreDatas = ScoreViewModel()
    
    @State private var showScore = false
    @State private var restartQuizz = false
    
    var userDatas: ScoreViewModel
    
    var body: some View {
        VStack(spacing: 65.0) {
            Spacer()
            Text("Quiz Result")
                .fontWeight(.black)
                .font(.title2)
            Image("trophy")
                .resizable()
                .scaledToFit()
                .frame(width: 250.0 / 2, height: 250.0 / 2)
            VStack(spacing: 30.0) {
                Text("Congratulations!")
                    .font(.largeTitle)
                    .fontWeight(.black)
                Text("Your Score")
                    .fontWeight(.ultraLight)
                HStack(spacing: 0.0) {
                    Text(score.correctAnswer < 10 ? "0\(score.correctAnswer)" : "\(score.correctAnswer)")
                        .foregroundColor(Color("greenQuizz"))
                        .kerning(5)
                    Text("/20")
                        .kerning(5)
                }
                .font(Font.custom("OpenSansCondensed-Bold", size: 30))
            }
            HStack {
                Spacer()
                Button(action: {
                    self.showScore.toggle()
                }, label: {
                    Image(systemName: "wallet.pass")
                    Text("ScoreBoard")
                })
                    .sheet(isPresented: $showScore, content: {
                        ScoreBoardView(scoreDatas: self.scoreDatas, userDatas: self.userDatas)
                    })
                    .frame(width: 150, height: 50)
                    .background(Color.white)
                    .foregroundColor(.black)
                    .cornerRadius(8)
                Spacer()
                Button(action: {
                    self.restartQuizz.toggle()
                }, label: {
                    Image(systemName: "gobackward")
                    Text("Take New Quiz")
                })
                .fullScreenCover(isPresented: $restartQuizz, content: {
                    HomeView()
                })
                .frame(width: 150, height: 50)
                .background(Color("cyanQuizz"))
                .foregroundColor(.white)
                .cornerRadius(8)
                Spacer()
            }
            Spacer()
        }
        .frame(minWidth: 300, idealWidth: 300, maxWidth: .infinity)
        .foregroundColor(Color.white)
        .background(Color("blueQuizz"))
        .edgesIgnoringSafeArea(.all)
    }
}
