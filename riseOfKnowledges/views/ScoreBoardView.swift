//
//  ScoreBoardView.swift
//  riseOfKnowledges
//
//  Created by Florian Beaumont on 9/23/20.
//  Copyright © 2020 Florian Beaumont. All rights reserved.
//

import SwiftUI

struct ScoreBoardView: View {
    
    @ObservedObject var scoreDatas = ScoreViewModel()
    
    var userDatas: ScoreViewModel
    
    var body: some View {
        VStack {
            if self.scoreDatas.allScore.isEmpty {
                Indicator()
            } else {
                VStack {
                    Spacer()
                    Spacer()
                    Text("🏆 LEADERBOARD 🏆")
                        .foregroundColor(Color("basicFont"))
                        .font(.largeTitle)
                        .font(.system(size: 46))
                        .fontWeight(.bold)
                    List {
                        ForEach(Array(self.scoreDatas.allScore.enumerated()), id: \.1.id) { (index, scoreData) in
                            HStack {
                                Text(String(index + 1))
                                Text(scoreData.name)
                                Spacer()
                                Text(String(scoreData.score))
                            }
                        }
                        .foregroundColor(Color("basicFont"))
                    }
                }
            }
        }
        .onAppear() {
            self.userDatas.postScore()
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.1) {
                self.scoreDatas.getScore()
            }
        }
        .background(Color("blueQuizz"))
    }
}
